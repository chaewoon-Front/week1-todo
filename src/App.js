import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "오채운 리액트 배우자",
    },
  ]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        추가하기
      </button>
      <h1>Todo List</h1>
      <div className="todos-container">{}</div>
    </div>
  );
}

export default App;
