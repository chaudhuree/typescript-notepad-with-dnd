import "./App.css";
import Basics from "./basics";
import { FC, useState } from "react";
import InputField from "./components/InputField";
import Todo from "./models/models";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  //function for add todos
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };
  return (
    <div className="App">
      {/*<Basics></Basics>*/}
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
