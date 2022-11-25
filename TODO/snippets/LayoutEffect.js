// https://codesandbox.io/s/useeffect-flash-on-render-zvo59

import React, { useState, useEffect, useLayoutEffect } from "react";

const BlinkyRender = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return (
    <div>
      <button onClick={() => setValue(0)}>value</button>: {value}
    </div>
  );
};

const GoodRender = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  console.log("render", value);

  return (
    <div>
      <button onClick={() => setValue(0)}>value</button>: {value}
    </div>
  );
};

const FlickerFibonacci = () => {
  const [targetIndex, setTargetIndex] = useState(0);
  const [[currentIndex, prev, current], setStep] = useState([0, 1, 1]);
  useEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  useEffect(() => {
    if (targetIndex < currentIndex) {
      setStep([0, 1, 1]);
    }
  }, [targetIndex, currentIndex]);
  return (
    <div>
      <input
        type="number"
        value={targetIndex}
        onChange={(event) => setTargetIndex(Number(event.target.value))}
      />
      {current}
    </div>
  );
};

const GoodFibonacci = () => {
  const [targetIndex, setTargetIndex] = useState(0);
  const [[currentIndex, prev, current], setStep] = useState([0, 1, 1]);
  useLayoutEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  useLayoutEffect(() => {
    if (targetIndex < currentIndex) {
      setStep([0, 1, 1]);
    }
  }, [targetIndex, currentIndex]);
  return (
    <div>
      <input
        type="number"
        value={targetIndex}
        onChange={(event) => setTargetIndex(Number(event.target.value))}
      />
      {current}
    </div>
  );
};

export function LayoutEffect() {
  return (
    <>
      useEffect: <BlinkyRender />
      <br />
      useLayoutEffect: <GoodRender />
      <br />
      <hr />
      <br />
      useEffect: <FlickerFibonacci />
      <br />
      useLayoutEffect: <GoodFibonacci />
    </>
  );
}
