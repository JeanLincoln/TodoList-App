import { Trash } from 'phosphor-react'
import { InputHTMLAttributes, useContext } from 'react'
import { Task, TasksContext } from '../../Contexts/TaskContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../FirestoreEnv'
import * as S from './styles'
import { useFormContext } from 'react-hook-form'

export function TaskItem({ id, taskText, isChecked }: Task) {
  const { deleteTask } = useContext(TasksContext)

  const HandledeleteTask = () => {
    deleteTask(id)
  }

  const HandleCheckTask = async () => {
    const taskDoc = doc(db, 'tasks', id)
    const itsChecked = !isChecked ? { isChecked: true } : { isChecked: false }
    await updateDoc(taskDoc, itsChecked)
  }

  const updateTaskText = async (e: any) => {
    const taskDoc = doc(db, 'tasks', id)
    const newTaskText = { taskText: e.target.value }
    await updateDoc(taskDoc, newTaskText)
  }

  return (
    <S.Task>
      <div className="taskContent">
        <input
          className="taskCheck"
          checked={isChecked}
          onChange={HandleCheckTask}
          type="checkbox"
        />
        <input type="text" defaultValue={taskText} onBlur={updateTaskText} />
      </div>
      <button onClick={HandledeleteTask}>
        <Trash size={25} />
      </button>
    </S.Task>
  )
}
