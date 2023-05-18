import React from "react";

// Cavia
function MioComponente() {
  return "ciao";
}

// HOC - High Order Component

function makeDoubleComponent(Component) {
  function Doubled(props) {
    return (
      <React.Fragment>
        <Component {...props} />
        <Component {...props} />
      </React.Fragment>
    );
  }
  // Serve per ReactDevTools e stack trace
  Doubled.displayName = Doubled.name =
    (Component.name || Component.displayName) + "Doubled";
  return Doubled;
}

const MioComponenteDoubled = makeDoubleComponent(MioComponente);

const u = <MioComponenteDoubled />;

// RP - Render Props

function Doubled(props) {
  return (
    <React.Fragment>
      {props.content()}
      {props.content()}
    </React.Fragment>
  );
}

const v = <Doubled content={() => <MioComponente />} />;
