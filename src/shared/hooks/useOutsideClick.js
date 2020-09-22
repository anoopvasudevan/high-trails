import { useEffect, useCallback } from "react";

export const useOutsideClick = (insideElementRef, callback) => {
  const clickedOutsideHandler = useCallback((e) => {
    if (!insideElementRef.current.contains(e.target)) {
      callback();
    }
  }, [insideElementRef, callback]);

  useEffect(() => {
    window.addEventListener("click", clickedOutsideHandler);
    return () => {
      window.removeEventListener("click", clickedOutsideHandler);
    };
  }, [clickedOutsideHandler]);
};
