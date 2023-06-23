import { Button } from '@src/components/Button'
import { Input } from '@src/components/Input'
import styles from './AddNewTask.module.css'
import { FormEvent, useState } from 'react'
import { TaskProps } from '@src/Task/Task'
import { v4 as uuidv4 } from 'uuid'

export function AddNewTask({
  addTask,
}: {
  addTask: (task: TaskProps) => void
}) {
  const [description, setDescription] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    addTask({
      description,
      id: uuidv4(),
      isCompleted: false,
    })

    setDescription('')
  }

  const isButtonDisabled = () => description === ''

  return (
    <form onSubmit={handleSubmit} className={styles.addNewTask}>
      <Input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <Button type="submit" disabled={isButtonDisabled()} />
    </form>
  )
}
