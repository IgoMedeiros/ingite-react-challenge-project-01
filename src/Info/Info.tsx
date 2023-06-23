import styles from './Info.module.css'

export type InfoProps = {
  openTasks: number
  closeTasks: number
}

export function Info(infoProps: InfoProps) {
  return (
    <div className={styles.info}>
      <p data-testid="tasks-opened">
        Tasks opened <span>{infoProps.openTasks}</span>
      </p>
      <p data-testid="tasks-closed">
        Tasks done{' '}
        <span>
          {infoProps.closeTasks} of {infoProps.openTasks}
        </span>
      </p>
    </div>
  )
}
