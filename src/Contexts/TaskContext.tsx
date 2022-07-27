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
    markTaskAsChecked: (TodoId:string) => void
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
    const [checkedTasks, setCheckedTasks] = useState<Task[]>([])

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
    
    const markTaskAsChecked = (TaskToCheck:string) => {
        setTasks(
            tasks.map(task => {
                const taskToCheck = task.id === TaskToCheck
                const itsChecked = task.isChecked
                if(taskToCheck && !itsChecked){
                    return  {...task, isChecked: true}
                }
    
                if(taskToCheck && itsChecked){
                    return   {...task, isChecked: false}
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
                markTaskAsChecked,
                createNewTask,
                register,
                handleSubmit

            }}>
            {children}
        </TasksContext.Provider>
    )
}