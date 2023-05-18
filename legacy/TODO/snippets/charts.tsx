import React from "react";
import { scaleBand, scaleLinear } from "@visx/scale";

/*
  Creare un grafico a barre verticali utilizzando in svg
  i dati sono solo per poter testare
  il componente deve funzionare con qualsiasi numero di dati di input
  con qualsiasi valore numerico positivo
  il grafico ha dimensione fissa da props
  la barra con la y piu grande deve essere alta tutto il grafico
*/

const simpleChartData = [{ y: 2 }, { y: 6 }, { y: 4 }, { y: 1 }];

type SimpleChartProps = {
  width?: number;
  height?: number;
  data?: Array<{ y: number }>;
};
export function SimpleBarChart({
  data = simpleChartData,
  width = 400,
  height = 400,
}: SimpleChartProps) {
  const allY = data.map((point) => point.y);
  const maxY = Math.max(...allY);
  const rangeY = maxY;
  const barCount = data.length;
  const barWidth = width / barCount;
  return (
    <svg width={width} height={height}>
      {data.map((point, index) => {
        // Pixel = Coordinate * (Pixel / Coordinate)
        const barHeight = point.y * (height / rangeY);
        return (
          <rect
            key={index}
            x={index * barWidth}
            y={height - barHeight}
            fill={`hsl(${360 * ((index + 1) / data.length)}, 50%, 50%)`}
            width={barWidth}
            height={barHeight}
          />
        );
      })}
    </svg>
  );
}

/*
  Creare un grafico a barre verticali utilizzando in svg
  i dati sono solo per poter testare
  il componente deve funzionare con qualsiasi numero di dati di input
  con qualsiasi valore numerico positivo
  il grafico ha dimensione fissa da props
  la barra con la y piu grande deve essere alta tutto il grafico
  calcolare le coordinate x e altezza barre usando la funzione mapNumberFromRangeAtoRangeB
*/

type NumericRange = {
  min: number;
  max: number;
};

function mapNumberFromRangeAtoRangeB(
  rangeANumber: number,
  rangeA: NumericRange,
  rangeB: NumericRange
): number /* rangeBNumber */ {
  if (rangeA.min >= rangeA.max) throw new Error();
  if (rangeB.min >= rangeB.max) throw new Error();
  const rangeASize = rangeA.max - rangeA.min;
  const rangeBSize = rangeB.max - rangeB.min;
  const rangeBNumber =
    ((rangeANumber - rangeA.min) / rangeASize) * rangeBSize + rangeB.min;
  return rangeBNumber;
}

(() => {
  const assert = (test: boolean) => {
    if (!test) throw new Error();
  };
  assert(
    mapNumberFromRangeAtoRangeB(
      5,
      { min: 0, max: 10 },
      { min: 0, max: 100 }
    ) === 50
  );
  assert(
    mapNumberFromRangeAtoRangeB(1, { min: 0, max: 3 }, { min: 0, max: 9 }) === 3
  );
  assert(
    mapNumberFromRangeAtoRangeB(
      15,
      { min: 10, max: 20 },
      { min: 30, max: 40 }
    ) === 35
  );
  assert(
    mapNumberFromRangeAtoRangeB(
      15,
      { min: 10, max: 20 },
      { min: 30, max: 50 }
    ) === 40
  );
})();

export function SimpleBarChartWithMapping({
  data = simpleChartData,
  width = 400,
  height = 400,
}: SimpleChartProps) {
  const maxY = Math.max(...data.map((point) => point.y));
  const yRange = { min: 0, max: maxY };
  const chartWidthRange = { min: 0, max: width };
  const xRange = { min: 0, max: data.length };
  const chartHeightRange = { min: 0, max: height };
  return (
    <svg width={width} height={height}>
      {data.map((point, index) => {
        const x = mapNumberFromRangeAtoRangeB(index, xRange, chartWidthRange);
        const barHeight = mapNumberFromRangeAtoRangeB(
          point.y,
          yRange,
          chartHeightRange
        );
        return (
          <rect
            key={index}
            x={x}
            y={height - barHeight}
            width={width / data.length}
            height={barHeight}
            fill={`hsl(${mapNumberFromRangeAtoRangeB(index, xRange, {
              min: 0,
              max: 360,
            })}, 50%, 50%)`}
          />
        );
      })}
    </svg>
  );
}

/*
  Creare un grafico a barre verticali utilizzando in svg
  i dati sono solo per poter testare
  il componente deve funzionare con qualsiasi numero di dati di input
  con qualsiasi valore numerico positivo
  il grafico ha dimensione fissa da props
  la barra con la y piu grande deve essere alta tutto il grafico
  calcolare le coordinate x e altezza barre usando le funzioni offerte da visx (scaleLinear scaleBand)
*/

export function SimpleBarChartWithVisx({
  data = simpleChartData,
  width = 400,
  height = 400,
}: SimpleChartProps) {
  const xScale = React.useMemo(
    () =>
      scaleBand<string>({
        range: [0, width],
        domain: data.map((point, index) => String(index)),
        padding: 0.5,
      }),
    [data, width]
  );
  const yScale = React.useMemo(
    () =>
      scaleLinear<number>({
        range: [0, height],
        domain: [0, Math.max(...data.map((point) => point.y))],
      }),
    [data, height]
  );
  const hueScale = React.useMemo(
    () =>
      scaleLinear<number>({
        range: [0, 360],
        domain: [0, data.length],
      }),
    [data.length]
  );
  return (
    <svg width={width} height={height}>
      {data.map((point, index) => {
        const barWidth = xScale.bandwidth();
        const barX = xScale(String(index));
        const barHeight = yScale(point.y);
        const barY = height - barHeight;
        return (
          <rect
            key={index}
            x={barX}
            y={barY}
            width={barWidth}
            height={barHeight}
            fill={`hsl(${hueScale(index)}, 50%, 50%)`}
          />
        );
      })}
    </svg>
  );
}
