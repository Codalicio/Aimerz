import { useEffect, useReducer, useRef } from "react";

const Counter_1 = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        if (state.count === 0) {
          alert("Sorry, negative numbers are not allowed");
          return { count: 0 };
        }
        return { count: state.count - 1 };
    }
  };
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef();
  useEffect(() => {
    alert(`Count value is ${state.count}`);
  }, [state.count]);
  return (
    <>
      <div>
        <h1>Counter_1 : Using useReducer()</h1>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={() => inputRef.current.focus()}>Focus input</button>
      </div>
    </>
  );
};

export default Counter_1;
