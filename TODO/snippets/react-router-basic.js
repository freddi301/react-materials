// https://codesandbox.io/s/cranky-ganguly-fsm3k

import React from "react";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">home</Link> - <Link to="/contact">contact</Link> -
        <Link to="/local-products">product</Link> -
      </nav>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/local-products">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
}

function HomePage() {
  return <h1>Home</h1>;
}

function ContactPage() {
  return <h1>Contact</h1>;
}

function ProductPage() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Product</h1>
      <nav>
        <Link to={`${url}/wine`}>wine</Link> -
        <Link to={`${url}/pizza`}>pizza</Link> -
        <Link to={`${url}/honey`}>honey</Link> -
      </nav>
      <Switch>
        <Route path={`${path}/wine`}>
          <WinePage />
        </Route>
        <Route path={`${path}/pizza`}>
          <PizzaPage />
        </Route>
        <Route path={`${path}/honey`}>
          <HoneyPage />
        </Route>
      </Switch>
    </div>
  );
}

function WinePage() {
  // const match = useRouteMatch();
  // const url = match.url;
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>Wine</h2>
      <nav>
        <Link to={`${path}/2007/Italy`}>Best Selling</Link>
      </nav>
      <Route path={`${path}/:year/:country`}>
        <WineYearPage />
      </Route>
    </div>
  );
}

function WineYearPage() {
  const { year, country } = useParams();
  return (
    <h3>
      {year} - {country}
    </h3>
  );
}

function PizzaPage() {
  return <h2>Pizza</h2>;
}

function HoneyPage() {
  return <h2>Honey</h2>;
}
