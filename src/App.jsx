import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Home from './pages/Home'
import TodoList from './pages/TodoList'

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path='/todoList' element={<TodoList />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
