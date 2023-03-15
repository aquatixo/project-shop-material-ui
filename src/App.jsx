import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import MyPage from './components/MyPage'
import NavTop from './components/NavTop'

function App() {
  //current page path
  const { pathname } = useLocation();

  let excludedRoutes = useSelector((state)=>{return state.excludedRoutes});
  let member = useSelector((state)=>{return state.member});

  return (
    <>
      {!excludedRoutes.includes(pathname) 
        && <NavTop/>
      }

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/myPage" element={<MyPage/>}></Route>
      </Routes>

    </>
  )
}

export default App
