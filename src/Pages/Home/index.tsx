import {PlusCircle,ClipboardText} from 'phosphor-react'
import { 
    FormContainer, 
    MainContainer,
    CreatedTasksContainer,
    TaskContainer
} from './styles'

export function Home(){
    return (
        <MainContainer>
        <FormContainer>
            <input type="text" placeholder='Add a new task'/>
            <button type="submit">Create <PlusCircle size={18}/></button>
        </FormContainer>
        <CreatedTasksContainer>
            <div id="TaskStatistics">
                <div className="Statistics">
                <p>Tasks Created</p>
                <span>0</span>
                </div>
                <div className="Statistics">
                <p>Tasks Finished</p>
                <span>0</span>
                </div>
            </div>
            <TaskContainer>
                <ClipboardText size={56}/>
                <strong>You don't have any task added yet</strong>
                <span>Add tasks and arrange your items todo</span>
            </TaskContainer>
        </CreatedTasksContainer>
        </MainContainer>
    )
}