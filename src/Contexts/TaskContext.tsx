import { createContext, ReactNode, useState } from "react";
import { useForm, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type Task = {
    id: string
    taskText:string
    isChecked:boolean
}

export type NewTaskFormData = {
    taskText:string
}

type TasksContextType = {
    tasks:Task[]
    createNewTask:(data:NewTaskFormData) => void
    deleteTask: (TodoId:string) => void
    handleTaskChecks: (TodoId:string) => void
    register: UseFormRegister<{ taskText: string; }>
    handleSubmit:UseFormHandleSubmit<{ taskText: string; }>
}

type TasksContextProviderProps = {
    children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextType)

export function TasksContextProvider({children}:TasksContextProviderProps){
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: String(new Date()),
            taskText:'teste',
            isChecked:false
        }
        
    ])

    const { register, handleSubmit, reset } = useForm({
        defaultValues:{
            taskText:''
        }
    })

    const createNewTask = (data:NewTaskFormData) => {
        const id = String(new Date())
    
        const newTask = {
            id:id,
            taskText:data.taskText,
            isChecked:false
        }
        console.log(data)
        reset()
        setTasks((state):Task[] => [...state, newTask])
    }
    
    const deleteTask = (TaskToDelete:string) => {
        const filteredTasks = tasks.filter(
            task => task.id !== TaskToDelete)
            setTasks(filteredTasks)
    }
    
    const handleTaskChecks = (taskId:string) => {
        setTasks(
            tasks.map(task => {
                if(task.id === taskId && !task.isChecked){
                    return {...task, isChecked:true}
                }
                if(task.id === taskId && task.isChecked){
                    return {...task, isChecked:false}
                }
                return task
            })
        )
    }
    
    return(
        <TasksContext.Provider
            value={{
                tasks,
                deleteTask,
                handleTaskChecks,
                createNewTask,
                register,
                handleSubmit

            }}>
            {children}
        </TasksContext.Provider>
    )
}