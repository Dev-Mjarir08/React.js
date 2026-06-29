import React from "react";
import { useDispatch } from "react-redux";
import { createBook } from "./features/book/bookSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleCreate = () => {
    const book = {
      title: "Atomic Habits",
      author: "James Clear",
      price: 500,
    };

    dispatch(createBook(book));
    console.log(book);
    
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Book</button>
    </div>
  );
};

export default App;