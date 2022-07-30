import * as S from './styles'
import { TaskItem } from '../../Components/Task'
import { useContext } from 'react'
import { TasksContext } from '../../Contexts/TaskContext'
import { MaskSad } from 'phosphor-react'

export function TasksDones() {
  const { tasks } = useContext(TasksContext)

  const renderCheckedTasks = () => {
    const checkedTasks = tasks.filter((task) => task.isChecked)
    if (!checkedTasks.length) {
      return (
        <div className="noTaskContainer">
          <MaskSad size={56} />
          <strong>You don't have any solved tasks yet</strong>
          <span>Add tasks and solve them!</span>
        </div>
      )
    }
    return tasks.map(({ id, taskText, isChecked }) => {
      if (isChecked) {
        return (
          <TaskItem
            key={id}
            id={id}
            taskText={taskText}
            isChecked={isChecked}
          />
        )
      }
    })
  }
  return (
    <S.MainContainer>
      <S.CreatedTasksContainer>
        <S.TaskStatistics>
          <div className="Statistics">
            <p>Tasks Created</p>
            <span>{tasks.length}</span>
          </div>
          <div className="Statistics">
            <p>Tasks Finished</p>
            <span>
              {tasks.reduce((acc, task) => {
                if (task.isChecked === true) {
                  return (acc += 1)
                }
                return acc
              }, 0)}{' '}
              of {tasks.length}
            </span>
          </div>
        </S.TaskStatistics>
        <S.TaskContainer>{renderCheckedTasks()}</S.TaskContainer>
      </S.CreatedTasksContainer>
    </S.MainContainer>
  )
}
