// https://codesandbox.io/s/objective-rubin-to6fj
import React from "react";
import ReactDOM from "react-dom";

function hello() {
  alert("hello");
}

function Icon() {
  return <span>👤</span>;
}

const app_jsx = (
  <ol onClick={hello}>
    <li>giacomo</li>
    <li>
      mario <Icon />
    </li>
  </ol>
);

const app_element = React.createElement(
  "ol",
  {
    onClick: hello
  },
  React.createElement("li", {}, "giacomo"),
  React.createElement("li", {}, "mario", React.createElement(Icon))
);

const app_data = {
  type: "ol",
  props: {
    onClick: hello,
    children: [
      { type: "li", props: { children: ["giacomo"] } },
      { type: "li", props: { children: ["mario", { type: Icon }] } }
    ]
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(app_jsx, rootElement);
ReactDOM.render(app_element, rootElement);
// ReactDOM.render(app_data, rootElement);
