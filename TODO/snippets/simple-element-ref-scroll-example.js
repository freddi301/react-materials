// https://codesandbox.io/s/modern-field-sypm8

import React from "react";
import "./styles.css";

export default function App() {
  const data = React.useMemo(() => [...generateData(200)], []);
  const scrollContainerRef = React.useRef(null);
  const scrollBy = React.useCallback(pixels => {
    scrollContainerRef.current.scrollBy({ top: pixels, behavior: "smooth" });
  }, []);
  const scrollTo = React.useCallback(pixels => {
    scrollContainerRef.current.scrollTo({ top: pixels, behavior: "smooth" });
  }, []);
  return (
    <div>
      <button onClick={() => scrollBy(-200)}>up</button>
      <button onClick={() => scrollBy(200)}>down</button>
      <button onClick={() => scrollTo(0)}>top</button>
      <button onClick={() => scrollTo(10e4)}>bottom</button>
      <div
        ref={scrollContainerRef}
        style={{ width: "400px", height: "400px", overflowY: "scroll" }}
      >
        {data.map(({ id, color }) => (
          <div
            key={id}
            style={{ backgroundColor: color, height: "30px", margin: "1px" }}
          />
        ))}
      </div>
    </div>
  );
}

function* generateData(rowCount) {
  for (let i = 0; i < rowCount; i++) {
    yield { id: i, color: `hsl(${(i / rowCount) * 360}, 90%, 70%)` };
  }
}
