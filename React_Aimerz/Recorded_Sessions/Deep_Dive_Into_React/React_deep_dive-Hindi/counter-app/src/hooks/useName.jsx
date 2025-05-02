import { useEffect } from "react";

const useName = (count) => {
  useEffect(() => {
    alert(`My name is amit, hajipur-${count}.`);
  }, [count]);
};

export default useName;
