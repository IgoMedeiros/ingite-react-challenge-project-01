import { TrashButton } from '@src/components/TrashButton/TrashButton'
import styles from './Task.module.css'
import { Checkbox } from '@src/components/Checkbox/Checkbox'

export type TaskProps = {
  id: string
  description: string
  isCompleted: boolean
  onDelete?: () => void
  onCheck?: () => void
}

export function Task(task: TaskProps) {
  return (
    <li className={styles.task}>
      <Checkbox checked={task.isCompleted} onChange={task.onCheck!} />
      <p className={task.isCompleted ? styles.done : ''}>{task.description}</p>
      <TrashButton onDelete={task.onDelete!} />
    </li>
  )
}
