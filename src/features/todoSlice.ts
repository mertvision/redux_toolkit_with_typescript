/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */


import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

// Types
export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
      name: "todos",
      initialState,
      reducers: {
        // actionlar
         addTodo: (state, action: PayloadAction<string>)=> {
            const newTodo = {id: uuidv4(), title: action.payload, completed: false}
            state.push(newTodo);
         },
         removeTodo: ()=> {}
      }
});

export default todoSlice.reducer;
export const {addTodo, removeTodo} = todoSlice.actions;