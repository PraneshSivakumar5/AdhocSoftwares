import React from "react";
import Counter from "./Counter.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  return (
    <div>
      <h1>Practice Playground</h1>

      <h2>Counter</h2>
      <Counter />

      <hr />

      <h2>To-Do</h2>
      <TodoList />
    </div>
  );
}

export default App;
