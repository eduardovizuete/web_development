import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // all are state variables declarations and initial value goes here
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: "auth", // this is important: the name of the slice which we will use to access the state variables 
    initialState,
    reducers: {   // here we will write any action function which you want to use globally to set or fetch the values
        checkIsUserLoggedIn: (state) => {
            //once user is logged in, we will store their email and token in localstorage in the key "user"
            if (localStorage.getItem("user")) {
                state.isLoggedIn = true; // here we update the state variable
            }
        },
        login: (state, action) => {
             //action argument helps us to pass data in our action functions
             localStorage.setItem("user", action.payload);
             state.isLoggedIn = true;
        },
        logout: (state) => {
            localStorage.clear();
            state.isLoggedIn = false;
        }
    }
});

// make visible the action functions like this
export const { checkIsUserLoggedIn, logout, login } = authSlice.actions;

// default export will by of reducer which we will pass in store.js
export default authSlice.reducer;