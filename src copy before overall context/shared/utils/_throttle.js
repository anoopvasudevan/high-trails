export const _throttle = (callbackFunc, frequency = 200) => {
  let waitComplete = true;
  let timeoutId;

  return (...args) => {
    if (!waitComplete) return;

    callbackFunc(...args);

    waitComplete = false;
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      waitComplete = true;
    }, frequency);
  };
};
