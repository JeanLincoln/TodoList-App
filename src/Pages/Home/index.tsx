import {PlusCircle,ClipboardText} from 'phosphor-react'
import * as S from './styles'

export function Home(){
    return (
        <S.MainContainer>
        <S.FormContainer>
            <input type="text" placeholder='Add a new task'/>
            <button type="submit">Create <PlusCircle size={18}/></button>
        </S.FormContainer>
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
                <ClipboardText size={56}/>
                <strong>You don't have any task added yet</strong>
                <span>Add tasks and arrange your items todo</span>
            </S.TaskContainer>
        </S.CreatedTasksContainer>
        </S.MainContainer>
    )
}