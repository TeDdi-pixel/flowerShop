import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TypeOrder } from "../../pages/adminPage/types/types";

export const orderSlice = createSlice({
    name: "cookies",
    initialState: {
        orderData: []
    },
    reducers: {
      setOrderData: (state, actions:PayloadAction<TypeOrder[]> )=>{
        state.orderData = actions.payload
      }
    },
  });
  
  export const { setOrderData } = orderSlice.actions;
  
  export default orderSlice.reducer;
  