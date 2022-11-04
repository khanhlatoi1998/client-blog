import { createSlice } from "@reduxjs/toolkit";

const initialStateCheckAuth: any = {
    auth: false,
}


const reducerAuth = createSlice({
    name: 'Auth',
    initialState: initialStateCheckAuth,
    reducers: {
        checkLogin: (state, action: any) => {
            return state = action?.payload;
        }
    }
});


const { reducer, actions } = reducerAuth;
export const { checkLogin } = actions;
export default reducer;

