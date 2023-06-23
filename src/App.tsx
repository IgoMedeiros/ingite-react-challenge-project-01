import './global.css'
import { Header } from '@components/Header'
import { AddNewTask } from './AddNewTask/AddNewTask'
import { Info, InfoProps } from './Info/Info'
import { Task, TaskProps } from './Task/Task'
import styles from './App.module.css'
import { Empty } from './components/Empty'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [infos, setInfos] = useState<InfoProps>({
    openTasks: 0,
    closeTasks: 0,
  })

  const addTask = (task: TaskProps) => {
    setTasks((previous) => {
      const newTaskList = [...previous, task]
      summary(newTaskList)
      return newTaskList
    })
  }

  const removeTask = (id: string) => {
    setTasks((previous) => {
      const newTaskList = previous.filter((task) => task.id !== id)
      summary(newTaskList)
      return newTaskList
    })
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
    summary(newTaskList)
  }

  const summary = (tasks: TaskProps[]) => {
    const summary: InfoProps = tasks.reduce(
      (acc, task) => {
        acc.openTasks += 1
        if (task.isCompleted) {
          acc.closeTasks += 1
        }
        return acc
      },
      { openTasks: 0, closeTasks: 0 }
    )
    setInfos(summary)
  }

  return (
    <>
      <Header />
      <AddNewTask addTask={addTask} />
      <div className={styles.tasks}>
        <Info {...infos} />
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
