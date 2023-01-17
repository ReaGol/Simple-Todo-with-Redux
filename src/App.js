import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index.js";

function App() {
  // const [newItem, setNewItem] = useState("");
  // const [items, setItems] = useState([])

  const newItem = useSelector((state) => state.todo.newItem);
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const { addTodo, deleteTodo, updateNewItem, clearInput, toggleTodo } = bindActionCreators(actionCreators, dispatch);

  function addItem() {
    
    if (!newItem) {
      console.log("Please enter a task");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // setItems((prev) => [...prev, item]);
    // setNewItem("");
    dispatch(addTodo(item));
    dispatch(clearInput());

    console.log(item);
  }

  function deleteItem(id) {
    // const newArray = items.filter((item) => item.id !== id);
    // setItems(newArray);
    dispatch(deleteTodo(id));
    console.log(id);
  }

  return (
  <div className="App">
    {/* {console.log(items)} */}
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add task"
        value={newItem}
        onChange={(e) => dispatch(updateNewItem(e.target.value))}
      />
      
      <button className="add-button" onClick={() => addItem()}>
        Add Todo
      </button>
   

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value} <input type='checkbox' onChange={() => toggleTodo()}/>
              <button
                className='delete-button'
                onClick={() => deleteItem(item.id)}
              >
                Delete Todo
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
