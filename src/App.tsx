import "./App.css";
import Basics from "./basics";
import { FC, useState } from "react";
import InputField from "./components/InputField";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      {/*<Basics></Basics>*/}
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
