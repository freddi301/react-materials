// https://codesandbox.io/s/dark-wave-dxp5e

import React from "react";
import "./styles.css";

export default function App() {
  const [n, setN] = React.useState(20);
  const data = React.useMemo(() => {
    return [...mockData(n)];
  }, [n]);
  const scrollContentRef = React.useRef(null);
  const [scrollContentWidth, setScrollContentWidth] = React.useState(0);
  const containerWidth = 400;
  const scrollBarWidthFraction = containerWidth / scrollContentWidth;
  const scrollBarWidth =
    (scrollBarWidthFraction > 1 ? 1 : scrollBarWidthFraction) * containerWidth;
  const [offset, setOffest] = React.useState(0);
  const scrollUnit = 10;
  const maxOffset = scrollContentWidth - containerWidth;
  const offestFraction = offset / scrollContentWidth;
  const scrollBarOffset = offestFraction * containerWidth;
  const scrollBarRef = React.useRef(null);
  const onWheel = React.useCallback(
    event => {
      if (event.deltaX >= 1) {
        setOffest(offset => Math.min(maxOffset, offset + scrollUnit));
      } else if (event.deltaX <= -1) {
        setOffest(offset => Math.max(0, offset - scrollUnit));
      }
    },
    [maxOffset]
  );
  React.useEffect(() => {
    if (scrollContentRef.current) {
      setScrollContentWidth(scrollContentRef.current.clientWidth);
    }
  }, [data]);
  React.useLayoutEffect(() => {
    if (scrollContentRef.current) {
      scrollContentRef.current.style.transform = `translateX(${-offset}px)`;
    }
    if (scrollBarRef.current) {
      scrollBarRef.current.style.transform = `translateX(${scrollBarOffset}px)`;
    }
  }, [offset, scrollBarOffset]);
  return (
    <div>
      <input
        type="number"
        value={n}
        onChange={event => setN(Number(event.target.value))}
      />
      <div
        style={{
          width: `${containerWidth}px`,
          overflow: "hidden",
          border: "1px solid lightgray",
          borderRadius: "4px"
        }}
        onWheel={onWheel}
      >
        <div
          style={{
            height: "10px",
            backgroundColor: "aqua",
            width: scrollBarWidth
          }}
          ref={scrollBarRef}
        />
        <div style={{ display: "inline-flex" }} ref={scrollContentRef}>
          {data.map(({ id }) => (
            <div key={id} style={{ margin: "10px" }}>
              {id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function* mockData(n) {
  for (let i = 0; i < n; i++) {
    yield { id: i };
  }
}
