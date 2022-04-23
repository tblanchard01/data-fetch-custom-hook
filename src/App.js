import "./App.css";
import { useState, useEffect } from "react";
const url = "https://dummyjson.com/todos";
function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ todos }) => setTodos(todos));
  }, []);
  return (
    <div className="App">
      {todos.map(({todo}) =>  <div>{todo}</div>
      )}
    </div>
  );
}

export default App;
