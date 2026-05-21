import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  function Add() {
    if (input.trim() === "") return;
    setTodo([...todo, input]);

    setInput("");
  }
  let items = [];
  for (let i = 0; i < todo.length; i++) {
    items.push(
      <li key={i}>
        {todo[i]}
        <button
          className="dbtn"
          onClick={() => {
            deleted(i);
          }}
        >
          deleted
        </button>
      </li>,
    );
  }
  function deleted(index) {
    let undeleted = [];
    for (let i = 0; i < todo.length; i++) {
      if (index !== i) {
        undeleted.push(todo[i]);
      }
    }
    setTodo(undeleted);
  }
  return (
    <div className="bigdiv">
      <div className="content">
        <h1>REACT TODO APP</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          className="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="btn" onClick={Add}>
          Add
        </button>
        <ul>{items}</ul>
      </div>
    </div>
  );
}
