// luca - first order function
function f1() {
  return 5;
}

// alberto - first order function
function f2(x) {
  return x * x;
}

// luca - high order function
function f3(x) {
  return x();
}

// alberto - high order function
const f4 = () => () => 5;

// luca - high order function
const f5 = (nome) => ({
  saluto() {
    return `ciao ${nome}`;
  }
});

// closure 1

function outer(value) {
  function inner() {
    console.log(value);
  }
  return inner;
}

// closure 2

function outer() {
  const value = 10;
  function inner() {
    console.log(value);
  }
  return inner;
}

// simulazione javascript - java

function outer(value) {
  function inner() {
    return value;
  }
}

// class OuterClass {
//   String value
//   OuterClass(String value) {
//     this.value = value
//   }
//   InnerClass run(){
//     return new InnerClass(this)
//   }
// }

// class InnerClass {
//   OuterClass parentScope;
//   InnerClass(OuterClass parentScope) {
//     this.parentScope = parentScope
//   }
//   String run() {
//     return this.parentScope.value
//   }
// }

function doubleNumber(x) {
  d = [];
  for (let i = 0; i < x.length; i++) {
    const item = x[i];
    d[i] = item * 2;
    // return item * 2;
  }
  return d;
}

console.log(doubleNumbers([1, 2, 3, 4])); // 2,4,6,8

function doubleNumbers(array) {
  return array.map((item) => {
    return item * 2;
  });
}

// luca lowercase
function toLower(stringhe) {
  return array.map((elem) => {
    return elem.toLowerCase();
  });
}

// alberto uppercase
function toUpperArray(array) {
  return array.map((item) => item.toUpperCase());
}

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function sumArrayFunctional(array) {
  return array.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0);
}

sumArrayFunctional([1, 2, 3]);

// alberto ["a", "b"] => "a\nb"
function mergeArray(array) {
  return array.reduce((accumulator, item) => {
    return accumulator + "\n" + item;
  }, "");
}
// array.join("\n")

// luca ["a", "b", "c"] => "c\nb\na"
function xxx(array) {
  return array.reduce((accumulator, item) => {
    return item + "\n" + accumulator;
  }, "");
}
// array.reverse().join("\n")

const toUpperArray = (array) => {
  return array.map((item) => item.toUpperCase());
};
toUpperArray({
  map(mapper) {
    return mapper("frederik");
  }
});
// qui

({
  map: (mapper) => {
    return mapper("frederik");
  }
}.map((item) => item.toUpperCase()));

({
  map: (mapper) => {
    return mapper("frederik");
  }
}.map((item) => item.toUpperCase()));

((mapper) => mapper("frederik"))((item) => item.toUpperCase());

//
((mapper) => mapper("frederik"))((item) => item.toUpperCase());

((item) => item.toUpperCase())("frederik");
("FREDERIK");

// ((x) => x + 1)(3);

// ({ x: 4 }.x);
// 4;

// ({method: () => 4}).method
// () => 4

// ({method: () => 4}).method(10)
// (({method: () => 4}).method)(10)
// (() => 4)(10)

function doubleNumbers1(array) {
  return array.map((item) => {
    return item * 2;
  });
}

function doubleNumbers2(array) {
  const mapper = (item) => {
    return item * 2;
  };
  return array.map(mapper);
}

function doubleNumbers3(array) {
  const mapper = (item) => {
    return item * 2;
  };
  return array.map(mapper());
}

// dichiarativo

/*document.body = */ ("<h1>hello</h2>");

// imperativo

const h1 = document.createElement("div");
h1.innerText = "hello";
document.body.appendChild(h1);

// programma react piu corto

ReactDOM.render(<h1>hello</h1>, document.getElementById("root"));

// JSX tradotto

const u = <h1 style={{ color: "red" }}>hello</h1>;
const u = React.createElement("h1", { style: { color: "red" } }, "hello");

const alberto = (
  <div id="1">
    <h1>hello</h1>
  </div>
);
const alberto = React.createElement(
  "div",
  { id: "1" },
  React.createElement("h1", {}, "hello")
);

const luca = (
  <ul>
    <li id="2">hello</li>
  </ul>
);
const luca = React.createElement(
  "ul",
  {},
  React.createElement("li", { id: 2 }),
  "hello"
);
