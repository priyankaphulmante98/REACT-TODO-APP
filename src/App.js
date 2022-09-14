import { Todo } from "./Components/Todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 style={{fontSize:"30px", backgroundColor:"pink"}}>TODO-APP</h1>
      <Todo />
    </div>
  );
}
