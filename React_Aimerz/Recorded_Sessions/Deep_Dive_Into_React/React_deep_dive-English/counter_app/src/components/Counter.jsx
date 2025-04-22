import { useRef, useState } from "react";
import useAlertResult from "../hooks/useAlertResult";

const Counter = () => {
  let [count, setCount] = useState(0);

  function decrement() {
    setCount((count) => {
      if (count === 0) {
        alert("Negative Numbers are not allowed!");
        return 0;
      }
      return count - 1;
    });
  }

  function increment() {
    setCount((count) => count + 1);
  }

  // useEffect(() => {
  //   alert("The page is updated!");
  // }, [count]);

  useAlertResult(count);

  const inputRef = useRef();

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>focus text</button>
    </>
  );
};

export default Counter;
