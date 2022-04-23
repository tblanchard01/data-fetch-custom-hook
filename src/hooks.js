import { useState, useEffect } from "react";

const url = "https://dummyjson.com/todos";

async function fetchTodos(setTodos) {
  let data = await fetch(url);
  data = await data.json();
  setTodos(data.todos);
}
export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos(setTodos);
  }, []);
  return todos;
}
