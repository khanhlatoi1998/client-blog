import { configureStore } from "@reduxjs/toolkit";
import reducerShowModalPopup from "./sliderPopup";
import reducerCheckLogin from "./sliderCheckLogin";
import reducerAuth from "./sliderAuth";
import reducerPost from "./sliderPost";
import { 
    listAllPostData, 
    listHandBook,
    listBlogShare,
    listConsious,
    listEat,
    listEntertainment,
    listHomestay,
    listTopView, 
} from "./sliderDataListPost";

const rootReducer = {
    showModal: reducerShowModalPopup,
    checkLogin: reducerCheckLogin,
    auth: reducerAuth,
    post: reducerPost,
    dataListPost: listAllPostData,
    listHandBook: listHandBook,
    listHomestay: listHomestay,
    listBlogShare: listBlogShare,
    listConsious: listConsious,
    listEat: listEat,
    listEntertainment: listEntertainment,
    listTopView: listTopView
};

const store = configureStore({
    reducer: rootReducer
});

export default store;