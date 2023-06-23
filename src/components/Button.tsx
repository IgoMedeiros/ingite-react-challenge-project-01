import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

type ButtonProps = {
  type: 'button' | 'submit'
  onClick?: () => void
  disabled: boolean
}
export function Button(buttonProps: ButtonProps) {
  return (
    <button
      type={buttonProps.type}
      className={styles.button}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
    >
      Create <PlusCircle size={24} />
    </button>
  )
}
