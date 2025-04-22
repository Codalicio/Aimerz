import { useReducer } from "react";

const Counter_1 = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      if (count === 0) {
        return 0;
      } else {
        return { count: state.count - 1 };
      }
    } else {
      return state.count;
    }
  }

  return (
    <>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default Counter_1;
