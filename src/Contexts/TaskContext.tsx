import { createContext, ReactNode, useEffect, useState } from 'react'
import { useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { getDocs } from 'firebase/firestore'
import { tasksCollection } from '../FirestoreEnv'

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

  const getStoredTasks = () => {
    const fetchData = async () => {
      const data = await getDocs(tasksCollection)
      const uncheckedTasksStored = data.docs.filter((doc) => doc.data())
      setTasks(
        uncheckedTasksStored.map((doc) => ({
          id: doc.id,
          taskText: doc.data().taskText,
          isChecked: doc.data().isChecked,
        })),
      )
    }
    console.log('requisitou')
    fetchData()
  }

  useEffect(getStoredTasks, [])

  const createNewTask = (data: NewTaskFormData) => {
    const id = String(new Date())

    const newTask = {
      id,
      taskText: data.taskText,
      isChecked: false,
    }
    console.log(data)
    reset()
    setTasks((state): Task[] => [...state, newTask])
  }

  const deleteTask = (TaskToDelete: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== TaskToDelete)
    setTasks(filteredTasks)
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
