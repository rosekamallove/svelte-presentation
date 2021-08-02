import { useState } from "react";
import "./App.css";
import TodoList from "./Todo";

export default function App() {
  /*
   * When any of these values changes, React goes through
   * each and every element and checks if it has been changed
   * and if it has beem then it re renders it.
   *
   * All that work to change a 0 to a 1
   *
   * To solve this problem react has following:
   *  -> shouldCompnentUpdate
   *  -> React.PureComponent
   *  -> useMemo
   *  -> useCallback
   *
   *  Basically, `You're` doing the computer's job
   */

  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  const handleInput = (e) => setName(e.target.value);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <div class="center">
        <h1>Hello, {name}!</h1>
        <input type="text" value={name} onInput={handleInput} />
        <button onClick={handleClick}>Click: {count}</button>
        <h1>React Todo</h1>
        <TodoList />
      </div>
    </>
  );
}
