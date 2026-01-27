import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Code", completed: true },
    { id: 2, title: "SD", completed: false },
    { id: 3, title: "Node", completed: true },
  ]);
  const [title, setTitle] = useState("");
  const [selFilter, setSelFilter] = useState("all");
  const activeCount = todos.filter((todo) => todo.completed === true).length;

  const filtertodos = todos.filter((todo) => {
    if (selFilter === "all") {
      return true;
    } else if (selFilter === "active") {
      return !todo.completed;
    } else {
      return todo.completed;
    }
  });

  const handelAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: title,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
  };

  const handelSelect = (e) => {
    console.log(e.target.value);
    setSelFilter(e.target.value);
  };
  const handelOnChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handelTodoOnChange = (e) => {
    // e.prevetDefault();
    const id = Number(e.target.id);
    console.log(id);

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );

    console.log(todos);
  };

  const handelDelete = (e) => {
    const id = Number(e.target.id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  const handleDeleteAll = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id === -1));
  };
  return (
    <>
      <div style={{ border: "2px solid black" }}>
        {filtertodos.map((todo) => (
          <div style={{ display: "flex" }} key={todo.id}>
            <li style={{}}>{todo.title}</li>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={handelTodoOnChange}
            />
            <button id={todo.id} onClick={handelDelete}>
              Delete Todo
            </button>
          </div>
        ))}

        <form action="" onSubmit={handelAddTodo}>
          <label htmlFor="addTodo">Add Todo : </label>
          <input
            type="text"
            id="addTodo"
            name="addTodo"
            onChange={handelOnChange}
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={handleDeleteAll}>Delete All</button>
        <label htmlFor="filter">Filter : </label>
        <select name="filterby" id="" onClick={handelSelect}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">completed</option>
        </select>

        <p>Active Todos : {activeCount}</p>
      </div>
    </>
  );
}
