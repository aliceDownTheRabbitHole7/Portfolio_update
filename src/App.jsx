import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Home from './pages/home/Home'
import Accounts from './pages/accounts/Accounts'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={(<Home />)} />
          <Route path='/about' element={(<About />)} />
          <Route path='/projects' element={(<Projects />)} />
          <Route path='/accounts' element={(<Accounts />)} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
