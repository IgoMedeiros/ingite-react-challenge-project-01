import React from 'react'
import styles from './Checkbox.module.css'

export type CheckboxProps = {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Checkbox(checkboxProps: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checkboxProps.checked}
      onChange={checkboxProps.onChange}
    />
  )
}
