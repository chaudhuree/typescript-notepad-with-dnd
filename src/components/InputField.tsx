import {ChangeEvent, FC, useRef} from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputField: FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e:React.FormEvent)=>{
        handleAdd(e)
        inputRef.current?.blur()
    }}>
      <input
          ref={inputRef}
        type="text"
        placeholder="enter a task"
        className="input__box"
        value={todo}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
