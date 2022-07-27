import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Task, TasksContext } from '../../Contexts/TaskContext'
import * as S from './styles'



export function TaskItem({id,taskText,isChecked}:Task){

    const {deleteTask,markTaskAsChecked} = useContext(TasksContext)

    const HandledeleteTask = () => {
        deleteTask(id)
    }

    const HandleCheckTask = () => {
        markTaskAsChecked(id)
    }

    return(
        <S.Task>
            <div className='taskContent'>
            <input onChange={HandleCheckTask} type="checkbox" />
            <span className="checkmark"></span>
            <span>{taskText}</span>
            </div>
            <button onClick={HandledeleteTask}><Trash size={25}/></button>
        </S.Task>
        )
}