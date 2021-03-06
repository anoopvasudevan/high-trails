import { useState, useEffect } from "react";

import { _throttle } from "../utils/_throttle";

const getWindowType = (width, s, m, l) => {
  if (width < s) return "x-small";
  if (width >= s && width < m) return "small";
  if (width >= m && width < l) return "medium";
  if (width >= l) return "large";
};

export const useBreakpoints = (s = 600, m = 900, l = 1200) => {
  const [windowSize, setWindowSize] = useState(
    getWindowType(window.innerWidth, s, m, l)
  );

  useEffect(() => {
    // console.log("listener added");
    const windowResizeHandler = _throttle(() => {
      setWindowSize(getWindowType(window.innerWidth, s, m, l));
    });

    window.addEventListener("resize", windowResizeHandler);

    return () => {
      // console.log('listener removed')
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, [s, m, l]);

  // useEffect(() => {
  //   console.log("listener added");
  //   const windowResizeHandler = () => {
  //     setWindowSize(getWindowType(window.innerWidth, s, m, l));
  //   };

  //   window.addEventListener("resize", _throttle(windowResizeHandler));

  //   return () => {
  //     console.log("listener removed");
  //     window.removeEventListener("resize", _throttle(windowResizeHandler));
  //   };
  // }, [s, m, l]);

  return windowSize;
};
