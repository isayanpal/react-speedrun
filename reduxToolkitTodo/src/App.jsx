import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h2 className="font-bold text-2xl">Redux Toolkit</h2>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
