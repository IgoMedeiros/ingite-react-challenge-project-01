import styles from "./Checkbox.module.css";

export function Checkbox({ checked }: { checked: boolean }) {
  return (
    <input type="checkbox" className={styles.checkbox} checked={checked} />
  );
}
