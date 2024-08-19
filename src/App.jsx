import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Protected from './components/Protected'
import Login from './pages/Login'

function App() {

  return (
    <>
      <HashRouter>
        <Link to='/'>Home</Link>
        <Routes>
          <Route path='/' element={<Protected />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </HashRouter>
    </>
  )
}

export default App
