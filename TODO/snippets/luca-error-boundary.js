import React from "react";

export class SimpleErrorBoundary extends React.Component {
  state = { hasError: false };
  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <button onClick={() => this.setState({ hasError: false })}>
            Riprova
          </button>
        </React.Fragment>
      );
    } else return this.props.children;
  }
  // this.setState(getDerivedStateFromError(erorreCatturato))
  // serve per calcolare lo stato, è qui che indichiamo come deve essere lo stato in caso di errore
  // questo viene eseguito all'interno del commit
  // quindi evita flickering in caso di errore
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  // serve per eseguire Effetti in caso di errore
  // qui meglio non fare this.setState
  // questo viene schedulato insieme agli altri effect
  componentDidCatch(error, errorInfo) {
    console.group("simple error boundary");
    console.error(error);
    console.info(errorInfo.componentStack);
    console.groupEnd("simple error boundary");
  }
}

function BuggedComponent() {
  const [state, setState] = React.useState({ text: "crash application" });
  return <button onClick={() => setState(null)}>{state.text}</button>;
}

export function LucaErrorExample() {
  return (
    <React.Fragment>
      <SimpleErrorBoundary>
        <p>gestito</p>
        <BuggedComponent />
      </SimpleErrorBoundary>
      <p>non gestito</p>
      <BuggedComponent />
      <p></p>
    </React.Fragment>
  );
}
