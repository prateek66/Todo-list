import React from 'react'
import { FcDeleteRow, FcOk, FcLeave } from "react-icons/fc";


function TodoList({todo,markComplete,removeTodo}) {
    return (
        <ul className="list-group  m-5">
        {todo.map((x, i) => (
          <li key={i} className=" list-group-item text-start">
            <div className=" d-flex align-items-center">
              {x.completed ? (
                <FcOk size="30" onClick={() => markComplete(i)} />
              ) : (
                <FcLeave size="30" onClick={() => markComplete(i)} />
              )}
              <span className="mx-3">{x.task}</span>
              <button
                type="button"
                className="btn ms-auto"
                onClick={() => removeTodo(i)}
              >
                {" "}
                <FcDeleteRow className="" size="30" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
}

export default TodoList
