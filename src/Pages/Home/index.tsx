import {PlusCircle,ClipboardText} from 'phosphor-react'
import { useState } from 'react'
import { Task } from './Components/Task'
import * as S from './styles'

export type Task = {
    id: string,
    taskText:string,
    isChecked:boolean
}

export function Home(){
const [tasks, setTasks] = useState<Task[]>([
    {
        id: String(new Date()),
        taskText:'teste',
        isChecked:false
    }
    
])

const createNewTask = (e:any) => {
    e.preventDefault()
    const id = String(new Date())
    const taskText = e.target.taskText.value

    const newTask = {
        id:id,
        taskText:taskText,
        isChecked:false
    }

    setTasks((state):Task[] => [...state, newTask])
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
              return( <Task 
                    key={id}
                    id={id}
                    taskText={taskText}
                    isChecked={isChecked}
                />)
        })
    )
}

    return (
        <S.MainContainer>
            <form onSubmit={createNewTask}>
        <S.FormContainer>
            <input type="text" name='taskText' placeholder='Add a new task'/>
            <button type="submit">Create <PlusCircle size={18}/></button>
        </S.FormContainer>
            </form>
        <S.CreatedTasksContainer>
            <S.TaskStatistics>
                <div className="Statistics">
                <p>Tasks Created</p>
                <span>0</span>
                </div>
                <div className="Statistics">
                <p>Tasks Finished</p>
                <span>0</span>
                </div>
                </ S.TaskStatistics>
            <S.TaskContainer>   
            {tasksAvaliable()}
            </S.TaskContainer>
        </S.CreatedTasksContainer>
        </S.MainContainer>
    )
}