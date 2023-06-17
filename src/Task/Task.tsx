import { TrashButton } from "@src/components/TrashButton";
import styles from "./Task.module.css";
import { Checkbox } from "@src/components/Checkbox";

export function Task({ done }: { done: boolean }) {
  return (
    <li className={styles.task}>
      <Checkbox checked={done} />
      <p className={done ? styles.done : ""}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <TrashButton />
    </li>
  );
}
