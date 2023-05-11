Guide: Creating Custom Form Components in React

When you need to create form components in React, it is recommended to avoid using a library and instead follow these steps:

1. Start with the basic approach of using the `useState` hook and `input` elements with `value` and `onChange` props.

```jsx
const [value, setValue] = React.useState("");
<input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
```

2. To create a custom hook that encapsulates the state management for a form field, you can use a thin wrapper approach. Begin by creating a custom hook called `useField` and initially include only the `useState` hook.

```tsx
function useField<Value>(props: { initial: Value }) {
  const [value, privateSetValue] = React.useState(props.initial);
  const [hasChanged, setHasChanged] = React.useState(false);

  const setValue = React.useCallback((value: Value) => {
    privateSetValue(value);
    setHasChanged(true);
  }, []);

  return { value, setValue, hasChanged };
}
```

3. Gradually add additional features inside the `useField` hook based on your requirements. This thin wrapper approach allows you to extend the functionality of the form field while remaining flexible and not tied to any specific approach.

4. Utilize the thin wrapper approach for input components as well. This way, if you need to change the style of all text input fields, you can easily do so. The `TextInput` component should receive the props returned by the `useField` hook directly through an interface.

```tsx
function TextInput(props: ReturnType<typeof useField<string>>) {
  return (
    <input
      value={props.value}
      onChange={(event) => props.setValue(event.currentTarget.value)}
      style={{ backgroundColor: props.hasChanged ? "gray" : "" }}
    />
  );
}
```

By following these steps, you can create custom form components in React using the thin wrapper approach, allowing for easy extensibility and flexibility throughout your application.