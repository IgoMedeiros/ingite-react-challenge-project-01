import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Button.module.css";

export function Button() {
  return (
    <button type="button" className={styles.button}>
      Create <PlusCircle size={24} />
    </button>
  );
}
