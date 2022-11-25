// https://codesandbox.io/s/long-worker-kt6eb

import React, { useCallback } from "react";
import "./styles.css";

export default function App() {
  const inputRef = React.useRef();
  const [value, setValue] = React.useState("");
  return (
    <div>
      <PasswordInput value={value} onChange={setValue} ref={inputRef} />
      <br />
      <button onClick={() => inputRef.current.focus()}>focus</button>
      <button onClick={() => inputRef.current.blur()}>blur</button>
    </div>
  );
}

const PasswordInput = React.forwardRef(({ value, onChange }, ref) => {
  const inputRef = React.useRef();
  const [hasFocus, setHasFocus] = React.useState(false);
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    blur: () => {
      inputRef.current.blur();
    }
  }));
  const type = hasFocus ? "text" : "password";
  const onInputChange = useCallback(
    event => {
      onChange(event.target.value);
    },
    [onChange]
  );
  const onFocus = useCallback(() => {
    setHasFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setHasFocus(false);
  }, []);
  return (
    <input
      type={type}
      value={value}
      ref={inputRef}
      onChange={onInputChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
});
