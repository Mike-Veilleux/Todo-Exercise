import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (e) => {
    const index = e;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleCompleted = (e) => {
    const index = e;
    const newTodos = [...todos];
    newTodos[index].finish = true;

    setTodos(newTodos);
  };

  const todoList = todos.map((item, index) => {
    let style = "";
    if (item.finish === true) {
      style = "isFinished";
    }

    return (
      <div key={index} className="todoRow">
        <div className="buttonContainer">
          {item.finish === false && (
            <div className=" p-1 " onClick={(e) => handleCompleted(index)}>
              <i className="fa-solid fa-circle-check fa-xl "></i>
            </div>
          )}
          <div className=" p-1" onClick={(e) => handleDelete(index)}>
            <i className="fa-solid fa-circle-xmark fa-xl "></i>
          </div>
        </div>
        <div className={style}> {item.task}</div>
      </div>
    );
  });

  return todoList;
};

export default TodoList;
