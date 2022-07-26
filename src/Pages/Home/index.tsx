import {PlusCircle,ClipboardText} from 'phosphor-react'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { TaskItem } from './Components/Task'
import * as S from './styles'

type Task = {
    id: string,
    taskText:string,
    isChecked:boolean
}

type NewTaskFormData = {
    taskText:string
}

export function Home(){
const [tasks, setTasks] = useState<Task[]>([
    {
        id: String(new Date()),
        taskText:'teste',
        isChecked:false
    }
    
])

const {register, handleSubmit} = useForm<NewTaskFormData>(
    {defaultValues:{ taskText:'',}}
)

const createNewTask = (data:NewTaskFormData) => {
    const id = String(new Date())
    const taskText = data.taskText

    const newTask = {
        id:id,
        taskText:taskText,
        isChecked:false
    }

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

const tasksAvaliable = () => {
    if(!tasks.length){
        return(
            <div className='noTaskContainer'>   
                <ClipboardText size={56}/>
                <strong>You don't have any task added yet</strong>
                <span>Add tasks and arrange your items todo</span>
            </div>
        )
    }
    return(
        tasks.map(({id,taskText, isChecked}) => {
              return( <TaskItem 
                    key={id}
                    id={id}
                    taskText={taskText}
                    isChecked={isChecked}
                    onDeleteTask={deleteTask}
                    onCheckTask={markTaskAsChecked}
                />)
        })
    )
}
    return (
        <S.MainContainer>
            <form onSubmit={handleSubmit(createNewTask)}>
        <S.FormContainer>
            
            <input id="text" {...register('taskText')} placeholder='Add a new task'/>
            <button type="submit">Create <PlusCircle size={18}/></button>
        </S.FormContainer>
            </form>
        <S.CreatedTasksContainer>
            <S.TaskStatistics>
                <div className="Statistics">
                <p>Tasks Created</p>
                <span>{tasks.length}</span>
                </div>
                <div className="Statistics">
                <p>Tasks Finished</p>
                <span>{
                tasks.reduce((acc,task) => {
                  if(task.isChecked === true){
                    return acc += 1
                  }
                  return acc
                },0)
                } of {tasks.length}
                </span>
                </div>
                </ S.TaskStatistics>
        <S.TaskContainer>   
            {tasksAvaliable()}
            </S.TaskContainer>
        </S.CreatedTasksContainer>
        </S.MainContainer>
    )
}