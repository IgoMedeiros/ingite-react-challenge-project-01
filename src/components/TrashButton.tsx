import { Trash } from '@phosphor-icons/react'
import styles from './TrashButton.module.css'

export function TrashButton() {
  return (
    <button type="button" className={styles.trash}>
      <Trash size={20} />
    </button>
  )
}
