/**
 * Author: Mert Özdemir <mertozdemircontact@icloud.com>
 */


import React, {useState} from 'react';
import {UseAppDispatch, UseAppSelector} from "./store/store";
import {addTodo} from "./features/todoSlice";

const App = () => {

  const todos = UseAppSelector(state=> state.todos)
  const [title, setTitle] = useState("")

  const dispatch = UseAppDispatch();

  const onSave = () => {
        dispatch(addTodo(title));
        setTitle("") 
  };

  return (
    <div className="App">
         <input type="text" onChange={(event)=> {
           const title = event.target.value;
           setTitle(title);
         }}></input>

         <button onClick={onSave}>Save</button>
         <ul>
          {todos.map(todo => <li key={todo.id}>
            {todo.title}
          </li>)}
         </ul>
    </div>
  );
}

export default App;
