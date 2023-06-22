import { Trash } from '@phosphor-icons/react'
import styles from './TrashButton.module.css'

type TrashButtonProps = {
  onDelete: () => void
}

export function TrashButton(trashButton: TrashButtonProps) {
  return (
    <button
      type="button"
      className={styles.trash}
      onClick={trashButton.onDelete}
      aria-label="remove"
    >
      <Trash size={20} />
    </button>
  )
}
