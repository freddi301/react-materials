import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarStack } from "@visx/shape";
import { Group } from "@visx/group";
import { AxisBottom } from "@visx/axis";

const data = [
  {
    date: new Date(2006),
    reactDevelopers: 100,
    angularDevelopers: 1000
  },
  {
    date: new Date(2015),
    reactDevelopers: 1000,
    angularDevelopers: 500
  },
  {
    date: new Date(2021),
    reactDevelopers: 2000,
    angularDevelopers: 0
  }
];

const getDate = ({ date }) => date.getTime();
const getCumulative = ({ reactDevelopers, angularDevelopers }) =>
  reactDevelopers + angularDevelopers;
const keys = ["reactDevelopers", "angularDevelopers"];

export function Grafico() {
  const svg = true;
  const width = 400;
  const height = 200;
  const dateScale = scaleBand({
    domain: data.map(getDate),
    range: [0, width],
    padding: 0.1
  });
  const countScale = scaleLinear({
    domain: [0, Math.max(...data.map(getCumulative))],
    range: [height, 0]
  });
  const colorScale = scaleOrdinal({
    domain: keys,
    range: ["blue", "red"]
  });
  if (svg)
    return (
      <svg width={width} height={height}>
        <Group>
          <BarStack
            data={data}
            keys={keys}
            x={getDate}
            xScale={dateScale}
            yScale={countScale}
            color={colorScale}
          >
            {(barStacks) =>
              barStacks.map((barStack) =>
                barStack.bars.map((bar) => (
                  <rect
                    key={`bar-stack-${barStack.index}-${bar.index}`}
                    x={bar.x}
                    y={bar.y}
                    height={bar.height}
                    width={bar.width}
                    fill={bar.color}
                  />
                ))
              )
            }
          </BarStack>
        </Group>
      </svg>
    );

  return (
    <div style={{ width, height, position: "relative" }}>
      <BarStack
        data={data}
        keys={keys}
        x={getDate}
        xScale={dateScale}
        yScale={countScale}
        color={colorScale}
      >
        {(barStacks) =>
          barStacks.map((barStack) =>
            barStack.bars.map((bar) => (
              <div
                key={`bar-stack-${barStack.index}-${bar.index}`}
                style={{
                  position: "absolute",
                  top: bar.y,
                  left: bar.x,
                  height: bar.height,
                  width: bar.width,
                  backgroundColor: bar.color
                }}
              />
            ))
          )
        }
      </BarStack>
    </div>
  );
}
