import React from "react";

// Cavia
function Yahuu() {
  return <h1>Yahuu</h1>;
}

// HOC - High Order Component

function makeDoubledYahuuComponent(Component) {
  function DoubledYahuu(props) {
    return (
      <div style={{ border: "4px solid black" }}>
        <Component {...props} />
        <Component {...props} />
      </div>
    );
  }
  // Serve per ReactDevTools e stack trace
  DoubledYahuu.displayName = DoubledYahuu.name =
    (Component.name || Component.displayName) + "DoubledYahuu";
  return Doubled;
}

const DoubledYahuuComponent = makeDoubledYahuuComponent(Yahuu);

const u = <DoubledYahuuComponent />;

// RP - Render Props

function Doubled(props) {
  return (
    <div style={{ border: "4px solid black" }}>
      {props.content()}
      {props.content()}
    </div>
  );
}

const v = <Doubled content={() => <Yahuu />} />;
