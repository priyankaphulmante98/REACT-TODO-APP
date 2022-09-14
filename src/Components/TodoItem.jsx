export function TodoItem(props) {
  console.log(props);
  const { id, title, status, handleToggle } = props;
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "orange",
        width: "90%",
        padding: "0.5rem",
        display: "flex",
        gap: "1rem",
        marginBottom: "1rem"
      }}
    >
      <p>{title}</p>
      <p>{status ? "done" : "not done"}</p>
      <button
        onClick={() => handleToggle(id)}
        style={{ height: "20px", marginTop: "15px" }}
      >
        toggle
      </button>
      <button
        style={{
          height: "25px",
          width: "100px",
          marginTop: "13px",
          backgroundColor: "red",
          color: "white"
        }}
        onClick={() => props.Delete(id)}
      >
        delete
      </button>
    </div>
  );
}
