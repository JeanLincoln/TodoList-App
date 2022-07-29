import { createContext, ReactNode, useEffect, useState } from 'react'
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db, tasksCollection } from '../FirestoreEnv'

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
  handleTaskChecks: (TodoId: string) => void
  register: UseFormRegister<{ taskText: string }>
  handleSubmit: UseFormHandleSubmit<{ taskText: string }>
}

type TasksContextProviderProps = {
  children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksContextProvider({ children }: TasksContextProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      taskText: '',
    },
  })

  const fetchTasks = () => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollection)
      setTasks((state): Task[] =>
        data.docs.map((doc) => ({
          id: doc.id,
          taskText: doc.data().taskText,
          isChecked: doc.data().isChecked,
        })),
      )
    }
    console.log('requisitou')
    getTasks()
  }

  useEffect(fetchTasks, [])

  const createNewTask = async (data: NewTaskFormData) => {
    await addDoc(tasksCollection, {
      taskText: data.taskText,
      isChecked: false,
    })

    // const id = String(new Date())

    // const newTask = {
    //   id,
    //   taskText: data.taskText,
    //   isChecked: false,
    // }
    // console.log(data)
    // reset()
    // setTasks((state): Task[] => [...state, newTask])
  }

  const deleteTask = async (taskId: string) => {
    const taskDoc = doc(db, 'tasks', taskId)
    await deleteDoc(taskDoc)
  }

  const handleTaskChecks = (taskId: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId && !task.isChecked) {
          return { ...task, isChecked: true }
        }
        if (task.id === taskId && task.isChecked) {
          return { ...task, isChecked: false }
        }
        return task
      }),
    )
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        deleteTask,
        handleTaskChecks,
        createNewTask,
        register,
        handleSubmit,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
