import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [{ task: inputValue, finish: false }, ...todos];
    setTodos(newList);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Add task ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
