import { Button } from '@src/components/Button'
import { Input } from '@src/components/Input'
import styles from './AddNewTask.module.css'

export function AddNewTask() {
  return (
    <div className={styles.addNewTask}>
      <Input />
      <Button />
    </div>
  )
}
