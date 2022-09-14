import { useState } from "react";

export function AddTodo({ handlAdd }) {
  const [text, setText] = useState("");
  // value,updaterfun
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "teal",
        width: "70%",

        padding: "10%"
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="add todo"
      />
      <button onClick={() => handlAdd(text)}>add</button>
      <p>{text}</p>
    </div>
  );
}
