import React from "react";

function ComponentCallbackMemoization() {
  const [count, setCount] = React.useState(0);

  const incrementSimple = () => {
    setCount(count + 1);
  };

  const incrementSimpleMemoized = React.useCallback(() => {
    setCount(count + 1);
  }, [setCount, count]);

  const incrementSimpleMemoizedBetter = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementSimpleMemoizedEvenBetter = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementSimpleMemoizedPerfect = React.useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return <button onClick={incrementSimpleMemoizedPerfect}>{count}</button>;
}

function useStateImplementedWithReducer(initial) {
  const [state, dispatch] = React.useReducer((oldState, action) => {
    if (typeof action === "function") {
      const updater = action;
      const newState = updater(oldState);
      return newState;
    } else {
      const newState = action;
      return newState;
    }
  }, initial);
  return [state, dispatch];
}
