import { Trash } from 'phosphor-react'
import * as S from './styles'

type TaskProps = {
    id: string,
    taskText:string,
    isChecked:boolean
}

export function Task({id,taskText}:TaskProps){
    return(
        <S.Task>
            <div className='taskContent'>
            <input id={id} type="checkbox" />
            <span className="checkmark"></span>
            <span>{taskText}</span>
            </div>
            <Trash size={25}/>
        </S.Task>
        )
}