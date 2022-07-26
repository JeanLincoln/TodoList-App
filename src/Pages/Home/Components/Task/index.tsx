import { Trash } from 'phosphor-react'
import * as S from './styles'

type TaskProps = {
    id: string,
    taskText:string,
    isChecked:boolean
    onDeleteTask: (TodoId:string) => void
    onCheckTask: (TodoId:string) => void
}

export function TaskItem({id,taskText,onDeleteTask,onCheckTask}:TaskProps){

const deleteTask = () => {
    onDeleteTask(id)
}

const checkTask = () => {
    onCheckTask(id)
}

    return(
        <S.Task>
            <div className='taskContent'>
            <input onChange={checkTask} type="checkbox" />
            <span className="checkmark"></span>
            <span>{taskText}</span>
            </div>
            <button onClick={deleteTask}><Trash size={25}/></button>
        </S.Task>
        )
}