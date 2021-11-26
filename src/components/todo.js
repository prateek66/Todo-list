import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    setTodo(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  const addTodo = (task) => {
    if (!task || /^\s*$/.test(task)) {
      return;
    }
    todo.push({ task: task, completed: false });

    setTodo([...todo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);

    setInput('');
  };

  const handleOnchange = (e) => {
    setInput(e.target.value);
  };
  const markComplete = (i) => {
    todo[i].completed = !todo[i].completed;
    setTodo([...todo]);
  };
  const removeTodo = (i) => {
    todo.splice(i, 1);
    setTodo([...todo]);
  };
  const reset = () => {
    setTodo([]);
  };
  return (
    <div className="container ">
      <div className="card m-auto vh-100 shadow-lg p-3 m-5 bg-white rounded">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-flex  align-items-center">
            <div className="input-group my-4 mr-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="ADD YOUR TODO FOR THE DAY..."
                name="todo"
                value={input}
                onChange={handleOnchange}
              />
            </div>
            <div className="m-3">
              <button type="submit" className="btn btn-danger ml-3">
                Add
              </button>
            </div>
            <div className="">
              <button
                type="submit"
                onClick={reset}
                className="btn btn-warning ml-3"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
        <TodoList
          todo={todo}
          markComplete={markComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default Todo;
