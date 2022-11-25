// https://codesandbox.io/s/gifted-tree-u07mg

import React from "react";
import "./styles.css";

export default function App() {
  const [fixed, setFixed] = React.useState(false);
  const data = React.useMemo(() => (fixed ? fixData(mockData) : mockData), [
    fixed
  ]);
  return (
    <>
      <input
        type="checkbox"
        checked={fixed}
        onChange={() => setFixed(!fixed)}
      />{" "}
      fix
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ padding: "8px" }}>
          <SimpleErrorBoundary>
            {data.map(person => (
              <Person key={person.id} {...person} />
            ))}
          </SimpleErrorBoundary>
        </div>
        <div style={{ borderRight: "1px solid lightgray" }} />
        <div style={{ padding: "8px" }}>
          {data.map(person => (
            <SimpleErrorBoundary>
              <Person key={person.id} {...person} />
            </SimpleErrorBoundary>
          ))}
        </div>
      </div>
    </>
  );
}

class SimpleErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }
  componentDidUpdate(oldProps) {
    if (this.props.children !== oldProps.children) {
      this.setState({ error: null, errorInfo: null });
    }
  }
  render() {
    const { error, errorInfo } = this.state;
    const thereIsError = error || errorInfo;
    if (!thereIsError) return this.props.children;
    return (
      <details label="Error">
        <summary>Error</summary>
        <pre>
          {error && error.toString()}
          {errorInfo && errorInfo.componentStack && errorInfo.componentStack}
        </pre>
      </details>
    );
  }
}

function Person({ name, surname, id }) {
  return (
    <div>
      {id.toString()} {name} {surname}
    </div>
  );
}

const mockData = [
  { id: 546345635, name: "Paul", surname: "Whatson" },
  { id: 198455635, name: "Fred", surname: "Flinstone" },
  { name: "Jack", surname: "Daniels" },
  { id: 546322345, name: "Steve", surname: "Jacobson" },
  { id: 500564635, name: "Lana", surname: "Reyez" }
];

function fixData(data) {
  return data.filter(person => person.id);
}
