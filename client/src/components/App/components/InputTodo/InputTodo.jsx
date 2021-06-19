import React, { useState } from "react";

import "./InputTodo.css";

export const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitFrom = async (e) => {
    e.preventDefault();

    try {
      const body = { description };

      // proxy -> http://localhost:5000

      const res = await fetch(`/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <h2 className="text-center my-5">Input Todo</h2>
      <form className="d-flex" onSubmit={onSubmitFrom}>
        <input
          className="form-control"
          type="text"
          placeholder="add todo"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input className="btn btn-success ml-1" type="submit" value="Add" />
      </form>
    </>
  );
};
