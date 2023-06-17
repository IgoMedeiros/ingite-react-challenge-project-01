import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <p>
        Tasks opened <span>5</span>
      </p>
      <p>
        Tasks done <span>2 of 5</span>
      </p>
    </div>
  );
}
