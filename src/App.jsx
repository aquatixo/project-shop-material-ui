import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Home from './components/Home'
import Login from './components/Login'
import MyPage from './components/MyPage'
import NavTop from './components/NavTop'
import Sandbox from './components/Sandbox'
import SignUp from './components/SignUp'
import { removeMember, setMember } from './store/slices/memberSlice';
import MemberService from './service/MemberService';
import Product from './components/Product'

function App() {
  //current page path
  const { pathname } = useLocation();

  let excludedRoutes = useSelector((state)=>{return state.excludedRoutes});
  let member = useSelector((state)=>{return state.member});
  
  let dispatch = useDispatch();
  //TODO do useEffect getMemberInfo on load
  useEffect(() => {
    let memberLocalStorage = JSON.parse(localStorage.getItem('member'));
    if(memberLocalStorage == null){
      return;
    }
    MemberService.getMyMemberInfo().then(
      (response) => {
        // console.log(response);
        dispatch(setMember(response));
      }
    )
    .catch(
      (error) => {
        MemberService.logout();
        dispatch(removeMember());
        window.location.reload;
      }
    );
    ;
  },[]);

  
  return (
    <>
      {!excludedRoutes.includes(pathname) 
        && <NavTop/>
      }

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>


        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/myPage" element={<MyPage/>}></Route>

        <Route path="/product" element={<Product/>}></Route>

        <Route path="/sandbox" element={<Sandbox/>}></Route>
      </Routes>

    </>
  )
}

export default App
