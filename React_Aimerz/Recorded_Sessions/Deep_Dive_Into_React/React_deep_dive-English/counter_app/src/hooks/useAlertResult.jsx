import { useEffect } from "react";

const useAlertResult = (count) => {
  useEffect(() => {
    alert(count);
  }, [count]);
};

export default useAlertResult;
