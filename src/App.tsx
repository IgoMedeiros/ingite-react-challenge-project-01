import './global.css'
import { Header } from '@components/Header'
import { AddNewTask } from './AddNewTask/AddNewTask'
import { Info } from './Info/Info'
import { Task, TaskProps } from './Task/Task'
import styles from './App.module.css'
import { Empty } from './components/Empty'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const addTask = (task: TaskProps) => {
    setTasks([...tasks, task])
  }

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleCheckTask = (taskChecked: TaskProps) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === taskChecked.id) {
        task.isCompleted = !task.isCompleted
        return task
      }
      return task
    })
    setTasks(newTaskList)
  }

  return (
    <>
      <Header />
      <AddNewTask addTask={addTask} />
      <div className={styles.tasks}>
        <Info />
        {tasks.length <= 0 ? (
          <Empty />
        ) : (
          <ul>
            {tasks.map((task) => (
              <Task
                key={task.id}
                {...task}
                onCheck={() => handleCheckTask(task)}
                onDelete={() => removeTask(task.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
