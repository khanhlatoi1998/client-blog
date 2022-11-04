import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../common/Type";


const initialStateModalPopup: AuthType = {
    nickname: '',
    username: '',
    password: '',
    post: {}
}

const reducerAuth = createSlice({
    name: 'auth',
    initialState: initialStateModalPopup,
    reducers: {
        updateAuth: (state, action: any) => {
            return state = action?.payload;      
        }
    },
});


const { reducer, actions } = reducerAuth;
export const { updateAuth } = actions;
export default reducer;

