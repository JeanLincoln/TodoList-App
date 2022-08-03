import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db, tasksCollection } from '../FirestoreEnv'
import { AuthContext } from './AuthContext'

export type Task = {
  id: string
  taskText: string
  isChecked: boolean
}

export type NewTaskFormData = {
  taskText: string
}

type TasksContextType = {
  tasks: Task[]
  createNewTask: (data: NewTaskFormData) => void
  deleteTask: (TodoId: string) => void
  register: UseFormRegister<{ taskText: string }>
  handleSubmit: UseFormHandleSubmit<{ taskText: string }>
}

type TasksContextProviderProps = {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  const { user } = useContext(AuthContext)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      taskText: '',
    },
  })

  useEffect(() => {
    onSnapshot(tasksCollection, (snapshot) => {
      const userTasks = snapshot.docs.filter(
        (doc) => doc.data().userUID === user?.uid,
      )
      setTasks(
        userTasks.map((doc) => {
          return {
            id: doc.id,
            userUID: doc.data().userUID,
            taskText: doc.data().taskText,
            isChecked: doc.data().isChecked,
          }
        }),
      )
    })
  }, [user])

  const createNewTask = async (data: NewTaskFormData) => {
    await addDoc(tasksCollection, {
      userUID: user!.uid,
      taskText: data.taskText,
      isChecked: false,
    })
    reset()
  }

  const deleteTask = async (taskId: string) => {
    const taskDoc = doc(db, 'tasks', taskId)
    await deleteDoc(taskDoc)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        deleteTask,
        createNewTask,
        register,
        handleSubmit,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
