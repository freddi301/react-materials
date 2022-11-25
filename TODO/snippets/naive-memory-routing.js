// https://codesandbox.io/s/objective-curie-uj11v

import React from "react";
import "./styles.css";

export default function App() {
  const [Page, setPage] = React.useState(() => HomePage);
  return (
    <>
      <Navbar setPage={setPage} />
      <Page />
    </>
  );
}

function Navbar({ setPage }) {
  // function Navbar(props){
  // const setPage = props.setPage
  return (
    <div>
      <button onClick={() => setPage(() => HomePage)}>home</button>
      <button onClick={() => setPage(() => AboutUs)}>about us</button>
      <button onClick={() => setPage(() => Products)}>products</button>
    </div>
  );
}

function HomePage() {
  return <h1>Home</h1>;
}

function AboutUs() {
  return <h1>About Us</h1>;
}

function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li>wine</li>
        <li>honey</li>
        <li>meat</li>
      </ul>
    </>
  );
}
