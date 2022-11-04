import { createSlice } from "@reduxjs/toolkit";
import { ValuePost } from "../../common/Type";

const initialState: Array<ValuePost> = [];

const reducerDataListPost = createSlice({
    name: 'listAllPostData',
    initialState: initialState,
    reducers: {
        getAllDataListPost: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListHandBook = createSlice({
    name: 'listHandBook',
    initialState: [],
    reducers: {
        getListHandBook: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListConsious = createSlice({
    name: 'listConsious',
    initialState: [],
    reducers: {
        getListConsious: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListTopView = createSlice({
    name: 'listTopView',
    initialState: [],
    reducers: {
        getListTopView: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListEntertainment = createSlice({
    name: 'listEntertainment',
    initialState: [],
    reducers: {
        getListEntertainment: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListEat = createSlice({
    name: 'listEat',
    initialState: [],
    reducers: {
        getListEat: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListHomestay = createSlice({
    name: 'listHomestay',
    initialState: [],
    reducers: {
        getListHomestay: (state, action) => {
            return state = action?.payload;
        },
    }
});

const reducerListBlogShare = createSlice({
    name: 'listBlogShare',
    initialState: [],
    reducers: {
        getListBlogShare: (state, action) => {
            return state = action?.payload;
        },
    }
});

export const listAllPostData = reducerDataListPost.reducer;
export const { getAllDataListPost } = reducerDataListPost.actions;

export const listHandBook = reducerListHandBook.reducer;
export const { getListHandBook } = reducerListHandBook.actions;

export const listConsious = reducerListConsious.reducer;
export const { getListConsious } = reducerListConsious.actions;

export const listTopView = reducerListTopView.reducer;
export const { getListTopView } = reducerListTopView.actions;

export const listEntertainment = reducerListEntertainment.reducer;
export const { getListEntertainment } = reducerListEntertainment.actions;

export const listEat = reducerListEat.reducer;
export const { getListEat } = reducerListEat.actions;

export const listHomestay = reducerListHomestay.reducer;
export const { getListHomestay } = reducerListHomestay.actions;

export const listBlogShare = reducerListBlogShare.reducer;
export const { getListBlogShare } = reducerListBlogShare.actions;
