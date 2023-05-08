import { useState } from 'react'
import { TaskList } from './components/TaskList'
import './styles/App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainWrapper'>
      <h1>Bytes Task List</h1>
      <TaskList/>
    </div>
  )
}

export default App
