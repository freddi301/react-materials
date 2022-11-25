import React from "react";

type State = { type: "initial" } | { type: "begin-line"; start: Point };
type Point = { x: number; y: number };

export function HomeScreen() {
  const [shapes, setShapes] = React.useState<Array<{ type: "line"; start: Point; end: Point }>>([]);
  const [state, setState] = React.useState<State>({ type: "initial" });
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });
  const getPointerPosition = (event: React.MouseEvent) => {
    const { top, left } = event.currentTarget.getBoundingClientRect();
    return { x: event.clientX - left, y: event.clientY - top };
  };
  return (
    <div>
      <svg
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid black",
          backgroundColor: "white",
        }}
        onMouseMove={(event) => {
          setPointer(getPointerPosition(event));
        }}
        onClick={(event) => {
          switch (state.type) {
            case "initial": {
              setState({ type: "begin-line", start: getPointerPosition(event) });
              break;
            }
            case "begin-line":
              setShapes([...shapes, { type: "line", start: state.start, end: getPointerPosition(event) }]);
              setState({ type: "initial" });
              break;
          }
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          setState({ type: "initial" });
        }}
      >
        {shapes.map((shape, index) => {
          switch (shape.type) {
            case "line": {
              return <line key={index} x1={shape.start.x} y1={shape.start.y} x2={shape.end.x} y2={shape.end.y} stroke="black" />;
            }
          }
        })}
        {(() => {
          switch (state.type) {
            case "begin-line": {
              return <line x1={state.start.x} y1={state.start.y} x2={pointer.x} y2={pointer.y} stroke="black" />;
            }
          }
        })()}
      </svg>
    </div>
  );
}
