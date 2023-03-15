import { configureStore, createSlice } from '@reduxjs/toolkit'
import member from './slices/memberSlice.jsx'

let excludedRoutes = createSlice({
  name : 'excludedRoutes'
  ,initialState : ['/signin', '/signup']
});

export default configureStore({
  reducer: {
    excludedRoutes : excludedRoutes.reducer
    ,member : member.reducer
  }
})