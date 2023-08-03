import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  productData: [],
  userInfo: []
}


export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers:{
        addUser: (state, action) => {
            state.userInfo = (action.payload)
        },
  }
})

export const { addUser} = appSlice.actions;
export default appSlice.reducer;