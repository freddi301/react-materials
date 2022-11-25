// Cavia
function MioComponente() {
  return "ciao";
}

// HOC - High Order Component

function makeDoubleComponent(Component) {
  function Squared(props) {
    return (
      <div style={{ border: "4px solid black" }}>
        <Component {...props} />
      </div>
    );
  }
  // Serve per ReactDevTools e stack trace
  Squared.displayName = Squared.name =
    (Component.name || Component.displayName) + "Squared";
  return Squared;
}

const MioComponenteSquared = makeDoubleComponent(MioComponente);

const u = <MioComponenteSquared />;

// RP - Render Props

function Squared(props) {
  return <div style={{ border: "4px solid black" }}>{props.content()}</div>;
}

const v = <Squared content={() => <MioComponente />} />;
