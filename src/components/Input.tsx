import styles from './Input.module.css'

type InputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(inputProps: InputProps) {
  return (
    <input
      type="text"
      onChange={inputProps.onChange}
      className={styles.input}
      placeholder="Add new task"
      value={inputProps.value}
    />
  )
}
