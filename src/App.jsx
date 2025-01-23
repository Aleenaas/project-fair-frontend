import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

import Projects from './Pages/Projects'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import PagenotFound from './Pages/PagenotFound'
import Footer from './Components/Footer'
import { useContext } from 'react'
import { loginResponseContext } from './context/ContextShare'

function App() {
  const {loginResponse} = useContext(loginResponseContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects' element={loginResponse?<Projects/>:<PagenotFound/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={true}/>}/>
        <Route path='/dashboard' element={loginResponse?<Dashboard/>:<PagenotFound/>}/>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
