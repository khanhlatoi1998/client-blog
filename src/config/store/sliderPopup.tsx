import { createSlice } from "@reduxjs/toolkit";
import { ModalPopup } from "../../common/Type";

const initialStateModalPopup: ModalPopup = {
    status: '',
}

const reducerShowModalPopup = createSlice({
    name: 'showModalPopup',
    initialState: initialStateModalPopup,
    reducers: {
        showModal: (state, action: any) => {
            switch (action?.payload) {
                case 'showLogin':
                case 'showRegister':
                case 'showForgotPassword':
                case 'closePopup':
                    return { status: action?.payload };
            }
        }
    },
});


const { reducer, actions } = reducerShowModalPopup;
export const { showModal } = actions;
export default reducer;

