import React, { useMemo, useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { done: false, text: "eat" },
    { done: false, text: "sleep" },
    { done: false, text: "code" },
    { done: false, text: "repeat" },
  ]);

  function toggleDone(t) {
    setTodos(
      todos.map((todo) => {
        if (todo === t) return { done: !t.done, text: t.text };
        return todo;
      })
    );
  }

  const [hideDone, setHideDone] = useState(false);

  function toggleHideDone() {
    setHideDone(!hideDone);
  }

  const filtered = useMemo(
    () => (hideDone ? todos.filter((todo) => !todo.done) : todos),
    [todos, hideDone]
  );

  return (
    <div>
      <label class="hide-done">
        <input
          type="checkbox"
          checked={hideDone}
          onChange={toggleHideDone}
        ></input>
        Hide Done
      </label>

      <ul>
        {filtered.map((todo) => (
          <li onClick={() => toggleDone(todo)}>
            {todo.done ? "👍" : ""} {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
