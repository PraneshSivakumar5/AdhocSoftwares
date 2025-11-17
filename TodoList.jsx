import React, { useState } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
    setText("");
  }

  function handleDelete(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <input
        placeholder="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
