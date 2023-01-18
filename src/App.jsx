import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { task: "Study hard...", finish: false },
    { task: "Study harder...", finish: false },
  ]);
  return (
    <div className="App">
      <div className="todoContainer">
        <h1>Todo list</h1>
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
