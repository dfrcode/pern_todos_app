import React, { useState, useEffect } from "react";

import "./ListTodo.css";

import { EditTodo } from "./components";

export const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  // proxy -> http://localhost:5000

  const getTodos = async () => {
    const res = await fetch(`/todos`);

    const todosArray = await res.json();

    setTodos(todosArray);
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  // proxy -> http://localhost:5000

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <table className="table my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, id) => (
            <tr key={todo.todo_id}>
              <th scope="row">{id + 1}</th>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo}/></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
