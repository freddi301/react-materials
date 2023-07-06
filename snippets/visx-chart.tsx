import React from "react";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";

function MyChart() {
  const width = 600;
  const height = 200;
  const bottomAxisHeight = 30;
  const leftAxisWidth = 30;
  const xScale = React.useMemo(() => {
    return scaleBand({
      domain: data.map(getX),
      round: true,
      range: [0, width - leftAxisWidth],
      padding: 0.4,
    });
  }, []);
  const yScale = React.useMemo(() => {
    return scaleLinear({
      domain: data.map(getY),
      range: [height - bottomAxisHeight, 0],
    });
  }, []);
  console.log(xScale.bandwidth());
  return (
    <svg width={width} height={height}>
      <rect fill="pink" width={width} height={height} />
      <g transform={`translate(${leftAxisWidth})`}>
        {data.map((datum, index) => {
          return (
            <rect
              key={index}
              width={xScale.bandwidth()}
              height={yScale(getY(datum))}
              x={xScale(getX(datum))}
              y={height - bottomAxisHeight - yScale(getY(datum))}
            />
          );
        })}
      </g>
      <AxisLeft scale={yScale} left={leftAxisWidth} />
      <AxisBottom
        scale={xScale}
        top={height - bottomAxisHeight}
        left={leftAxisWidth}
      />
    </svg>
  );
}

type Datum = {
  x: number;
  y: number;
};

function getX(datum: Datum) {
  return datum.x;
}

function getY(datum: Datum) {
  return datum.y;
}

const data: Array<Datum> = Array.from(
  (function* () {
    for (let i = 1; i < 10; i++) {
      yield {
        x: i,
        y: Math.trunc(Math.random() * 100),
      };
    }
  })()
);
