import "./App.css";
import { useFetchTodos } from "./hooks";
function App() {
  const todos = useFetchTodos();
  return (
    <div className="App">
      {todos.map(({ todo }, i) => (
        <div key={i}>{todo}</div>
      ))}
    </div>
  );
}

export default App;
