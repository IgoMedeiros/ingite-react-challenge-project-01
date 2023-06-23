import styles from './Header.module.css'
import rocket from '../../assets/rocket.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={rocket} alt="rocket" />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </div>
  )
}
