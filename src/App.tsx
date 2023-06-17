import "./global.css";
import { Header } from "@components/Header";
import { AddNewTask } from "./AddNewTask/AddNewTask";
import { Info } from "./Info/Info";
import { Task } from "./Task/Task";
import styles from "./App.module.css";
import { Empty } from "./components/Empty";

function App() {
  return (
    <>
      <Header />
      <AddNewTask />
      <div className={styles.tasks}>
        <Info />
        <Empty />
        <ul>
          <Task done={false} />
          <Task done={false} />
          <Task done={true} />
          <Task done={true} />
          <Task done={false} />
        </ul>
      </div>
    </>
  );
}

export default App;
