import React from "react";

export function MyListWithoutMemoization() {
  const [values, setValues] = React.useState<Array<boolean>>(
    new Array(1000).fill(true)
  );
  return (
    <ul>
      {values.map((value, index) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              checked={value}
              onChange={(event) =>
                setValues((values) =>
                  values.map((v, i) => (i === index ? !v : v))
                )
              }
            />
          </li>
        );
      })}
    </ul>
  );
}

type ExpensiveComponentProps = {
  children: React.ReactNode;
};
function ExpensiveComponent({ children }: ExpensiveComponentProps) {
  for (let i = 0; i < 1000000; i++) {}
  return children as JSX.Element;
}

export function MyListWithoutMemoizationWithExpensiveComponent() {
  const [values, setValues] = React.useState<Array<boolean>>(
    new Array(1000).fill(true)
  );
  return (
    <ul>
      {values.map((value, index) => {
        return (
          <li key={index}>
            <ExpensiveComponent>
              <input
                type="checkbox"
                checked={value}
                onChange={(event) =>
                  setValues((values) =>
                    values.map((v, i) => (i === index ? !v : v))
                  )
                }
              />
            </ExpensiveComponent>
          </li>
        );
      })}
    </ul>
  );
}

export function MyListWithoutMemoizationWithComponents() {
  const [values, setValues] = React.useState<Array<boolean>>(
    new Array(1000).fill(true)
  );
  return (
    <ul>
      {values.map((value, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            value={value}
            setValues={setValues}
          />
        );
      })}
    </ul>
  );
}
function ListItem({
  value,
  setValues,
  index,
}: {
  index: number;
  value: boolean;
  setValues: React.Dispatch<React.SetStateAction<boolean[]>>;
}): JSX.Element {
  return (
    <li>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) =>
          setValues((values) => values.map((v, i) => (i === index ? !v : v)))
        }
      />
    </li>
  );
}

const ListItemMemo = React.memo(ListItem);
export function MyListWithMemoizationWithComponents() {
  const [values, setValues] = React.useState<Array<boolean>>(
    new Array(1000).fill(true)
  );
  return (
    <ul>
      {values.map((value, index) => {
        return (
          <ListItemMemo
            key={index}
            index={index}
            value={value}
            setValues={setValues}
          />
        );
      })}
    </ul>
  );
}

function MyListToOptimize() {
  const [values, setValues] = React.useState<Array<boolean>>(
    new Array(1000).fill(true)
  );
  return (
    <ul>
      {values.map((value, index) => {
        const onChange = () =>
          setValues(values.map((v, i) => (i === index ? !v : v)));
        return (
          <li key={index}>
            <input type="checkbox" checked={value} onChange={onChange} />
          </li>
        );
      })}
    </ul>
  );
}

