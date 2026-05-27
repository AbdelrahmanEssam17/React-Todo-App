import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  let [input, setInput] = useState("");
  let [todo, setTodo] = useState([]);
  let [updated, setUpdated] = useState(false);
  let [editIndex, setEditIndex] = useState(null);

  function Add() {
    if (input.trim() === "") return;
    if (updated) {
      let allupdated = [...todo];
      allupdated[editIndex] = input;
      setTodo(allupdated);

      setUpdated(false);
      setEditIndex(null);
    } else {
      setTodo([...todo, input]);
    }
    setInput("");
  }
  function update(index) {
    setInput(todo[index]);
    setUpdated(true);
    setEditIndex(index);
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
  let items = [];
  for (let i = 0; i < todo.length; i++) {
    items.push(
      <li key={i}>
        {todo[i]}
        <button className="dbtn" onClick={() => deleted(i)}>
          deleted
        </button>

        <button className="updatebtn" onClick={() => update(i)}>
          Updated
        </button>
      </li>,
    );
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
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn"
          onClick={Add}
          style={{ backgroundColor: updated ? "yellow" : "blue" }}
        >
          {updated ? "update" : "Add"}
        </button>
        <ul>{items}</ul>
      </div>
    </div>
  );
}
