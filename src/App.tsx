import './global.css'
import { Header } from '@components/Header'
import { AddNewTask } from './AddNewTask/AddNewTask'
import { Info } from './Info/Info'
import { Task } from './Task/Task'
import styles from './App.module.css'
import { Empty } from './components/Empty'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  const [showTask, setShowTask] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  const toggleTask = () => {
    setShowTask(!showTask)
  }
  return (
    <>
      <Header />
      <AddNewTask />
      <div className={styles.tasks}>
        <Info />
        {tasks.length > 0 ? (
          <Empty />
        ) : (
          <ul>
            {tasks.map((task) => (
              <Task key={task.id} task={task} removeTask={removeTask} />
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default App
