import { ClipboardText } from "@phosphor-icons/react";
import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} />
      <p>
        You don't have any task registered yet
        <br />
        <span>Create a new task and organizer your items to do</span>
      </p>
    </div>
  );
}
