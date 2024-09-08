/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */


import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import todoSlice from "../features/todoSlice";

const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;