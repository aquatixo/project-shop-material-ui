import { createSlice } from "@reduxjs/toolkit";

// { 
//   email : '' ,name : ''
//   , accessToken : '', grantType : ''
//   ,refreshToken : '', tokenExpiresIn : ''
// }

let member = createSlice({
  name : 'member',
  initialState : {}

  ,reducers : {
    removeMember(state){
      // MemberService.logout();
      //member initial state to blank{}
      return {};
    }
    ,setMember(state, action){
      const obj = action.payload;

      const {email, nickname} = obj;

      return {email : email,  nickname : nickname};
    }
  }
});

export default member;
export let {removeMember,setMember} = member.actions

//BASIC KNOWLEDGE well learned lol
// The useSelector hook is used to extract data from the Redux store state. 
// When you call dispatch(getMember()), it sends an action to the store 
// which triggers a state change. Once the state is updated, you can use 
// useSelector to access the updated state.

// In other words, useSelector is used to retrieve data from the Redux store state
// , while dispatch is used to send actions to the store and trigger state changes. 
// If you only want to dispatch an action and don't need to access the updated state
// , you don't need to use useSelector.