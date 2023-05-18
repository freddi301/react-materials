import React from "react";

function BlinkyRender() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
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
}

function GoodRender() {
  const [value, setValue] = React.useState(0);

  React.useLayoutEffect(() => {
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
}

function FlickerFibonacci() {
  const [targetIndex, setTargetIndex] = React.useState(0);
  const [[currentIndex, prev, current], setStep] = React.useState([0, 1, 1]);
  React.useEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  React.useEffect(() => {
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
}

function GoodFibonacci() {
  const [targetIndex, setTargetIndex] = React.useState(0);
  const [[currentIndex, prev, current], setStep] = React.useState([0, 1, 1]);
  React.useLayoutEffect(() => {
    if (currentIndex < targetIndex) {
      setStep([currentIndex + 1, current, prev + current]);
    }
  }, [currentIndex, targetIndex, prev, current]);
  React.useLayoutEffect(() => {
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
}
