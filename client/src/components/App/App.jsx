import React from "react";

import "./App.css";

import { InputTodo, ListTodo } from "./components";

export const App = () => {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </>
  );
};
