import React from "react";

export function AlbertoRef() {
  const divRef = React.useRef();
  React.useLayoutEffect(() => {
    window.$(divRef.current).datepicker();
  }, []);

  return <div ref={divRef}></div>;
}
