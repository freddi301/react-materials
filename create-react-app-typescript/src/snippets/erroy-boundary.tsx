import React from "react";

class SimpleErrorBoundary extends React.Component<{
  children: React.ReactNode;
}> {
  state = { hasError: false };
  render() {
    if (this.state.hasError) return "error";
    return this.props.children;
  }
  // this.setState(getDerivedStateFromError(erorreCatturato))
  // serve per calcolare lo stato, è qui che indichiamo come deve essere lo stato in caso di errore
  // questo viene eseguito all'interno del commit
  // quindi evita flickering in caso di errore
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  // serve per eseguire Effetti in caso di errore
  // qui meglio non fare this.setState
  // questo viene schedulato insieme agli altri effect
  componentDidCatch(error: Error, { componentStack }: React.ErrorInfo) {
    console.group("simple error boundary");
    console.error(error);
    console.info(componentStack);
    console.groupEnd();
  }
}

function Bomb() {
  const [isDetonated, setIsDetonated] = React.useState(false);
  if (isDetonated) throw new Error();
  return (
    <button
      onClick={() => {
        setIsDetonated(true);
      }}
    >
      💣
    </button>
  );
}

function Example() {
  return (
    <div>
      <div>
        This will crash the whole app
        <Bomb />
      </div>
      <div>
        <SimpleErrorBoundary>
          Here the error is contained
          <Bomb />
        </SimpleErrorBoundary>
      </div>
    </div>
  );
}

// Exercise
// create and error boundary component that let retry on error

class RetryErrorBoundary extends React.Component<{
  children: React.ReactNode;
  retry: (params: { error: Error; retry(): void }) => React.ReactNode;
}> {
  state: { error?: Error } = {};
  render() {
    if (this.state.error)
      return this.props.retry({
        error: this.state.error,
        retry: () => {
          this.setState({});
        },
      });
    return this.props.children;
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
}

function RetryExample() {
  return (
    <div>
      <div>
        This will crash the whole app
        <Bomb />
      </div>
      <div>
        <RetryErrorBoundary
          retry={({ error, retry }) => {
            return (
              <div>
                <h1>An error has occurred</h1>
                <p>
                  {error.name} {error.message}
                </p>
                <pre>{error.stack}</pre>
                <button onClick={() => retry()}>retry</button>
              </div>
            );
          }}
        >
          Here the error is contained
          <Bomb />
        </RetryErrorBoundary>
      </div>
    </div>
  );
}
