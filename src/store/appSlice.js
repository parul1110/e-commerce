import {createSlice} from "@reduxjs/toolkit";
import {data} from "./products";

const initialState = {
  productData: data,
  userInfo: [],
  filterData: data,
  searchItem: null
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers:{
        addUser: (state, action) => {
            state.userInfo = (action.payload)
        },
        filterList: (state, action) => {
            state.filterData = data.filter((d)=>{
                let check = action.payload.filter((a)=>{
                    if(a.value === d.category){
                        return a.check;
                    }
                });
                if(check.length >0){
                    return d;
                }
            });
            if(state.searchItem) {
                state.filterData = state.filterData.filter((d)=>{
                    if(d.Description.toLowerCase().indexOf(state.searchItem) !== -1){
                        return d;
                    }
                });
            }
        },
        searchData: (state, action) => {
            state.filterData = data.filter((d)=>{
                    if(d.Description.toLowerCase().indexOf(action.payload) !== -1){
                        return d;
                    }
                });
            state.searchItem = action.payload;
        },
        increment: (state, action) => {
            state.productData = state.productData.map((d)=>{
                if(d.name === action.payload.name) {
                    d.count +=1;
                }
                return d;
            });
        },
        decrement: (state, action) => {
            state.productData = state.productData.map((d)=>{
                if(d.name === action.payload.name && d.count > 0) {
                    d.count -=1;
                }
                return d;
            });
        }
  }
})

export const { addUser, filterList, searchData, increment, decrement } = appSlice.actions;
export default appSlice.reducer;