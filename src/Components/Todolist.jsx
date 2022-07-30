import { TodoItem } from "./TodoItem";

export function TodoList({ data, handleToggle, Delete }) {
  console.log(data);

  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "pink",
        width: "90%",
        height: "330px",
        padding: "0.5rem"
      }}
    >
      {data.map((e) => (
        <TodoItem
          Delete={Delete}
          id={e.id}
          handleToggle={handleToggle}
          title={e.title}
          status={e.status}
        />
      ))}
    </div>
  );
}
