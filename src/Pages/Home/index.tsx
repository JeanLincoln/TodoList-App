import {PlusCircle,ClipboardText} from 'phosphor-react'
import { useContext } from 'react'
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form'
import { TaskItem } from '../../Components/Task'
import { TasksContext } from '../../Contexts/TaskContext'

import * as S from './styles'

export function Home(){

    const { tasks, createNewTask,register,handleSubmit } = useContext(TasksContext)

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
            tasks.map(({id,taskText,isChecked}) => <TaskItem 
                key={id} 
                id={id} 
                taskText={taskText}
                isChecked={isChecked}
            />)
        )
    }
        return (
            <S.MainContainer>
                <form onSubmit={handleSubmit((createNewTask as SubmitHandler<FieldValues>))}>
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