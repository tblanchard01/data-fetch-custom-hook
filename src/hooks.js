import { useState, useEffect } from "react";

const url = "https://dummyjson.com/todos";
export function useFetchTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      let data = await fetch(url);
      data = await data.json();
      setTodos(data.todos);
    }
    fetchTodos();
  }, []);
  return todos;
}
