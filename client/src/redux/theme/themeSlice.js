import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : 'light',
  };

  const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        togleTheme:(state)=>{
            state.theme = state.theme === 'light'?'dark':'light'
        }
    }
  })
  export const {togleTheme} =themeSlice.actions;
  export default themeSlice.reducer