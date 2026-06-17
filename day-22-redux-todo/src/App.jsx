import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./feature/todoSlice";


const App = () => {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleSubmit = () => {

    dispatch(
      addTodo({
        id: Date.now(),
        text: todo,
      })
    );

    setTodo("");
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Todo"
      />

      <button onClick={handleSubmit}>Add Todo</button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(removeTodo(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;