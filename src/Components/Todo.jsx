import { useState } from "react";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./Todolist";

export function Todo() {
  const [todo, setTodo] = useState([]);

  function handleToggle(id) {
    const toggle = todo.map((e) =>
      e.id === id
        ? {
            ...e,
            status: !e.status
          }
        : e
    );
    setTodo(toggle);
  }

  function Delete(id) {
    let delarr = todo.filter((e) => e.id !== id);
    setTodo(delarr);
  }

  function handleAdd(text) {
    setTodo([
      ...todo,
      {
        title: text,
        status: false,
        id: Date.now() + text
      }
    ]);
  }
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "grey",
        width: "70%",
        height: "500px",
        padding: "1rem 0"
      }}
    >
      <AddTodo handlAdd={handleAdd} />
      <TodoList Delete={Delete} data={todo} handleToggle={handleToggle} />
    </div>
  );
}
