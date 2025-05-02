import { useEffect, useRef, useState } from "react";
import Counter_1 from "../counter_1/Counter_1";
import useName from "../../hooks/useName";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => {
      if (count === 0) {
        alert("Negative numbers are not allowed!");
        return 0;
      }
      return count - 1;
    });
  };

  //   useEffect(() => {
  //     alert(`The value of the count state variable is - ${count}.`);
  //   }, [count]);

  const inputRef = useRef();

  useName(count);

  return (
    <>
      <div>
        <h1>Counter : Using useState()</h1>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus</button>
      </div>
      <div>
        <Counter_1 />
      </div>
    </>
  );
}

export default Counter;
