import React from "react";

export function LucaJquery() {
  const rif = React.useRef();

  React.useEffect(() => {
    window.$(rif.current).datepicker();
  }, []);

  return <div ref={rif} />;
}
