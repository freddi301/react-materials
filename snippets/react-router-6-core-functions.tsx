import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  NavLink,
  useParams
} from "react-router-dom";

const listaProdotti = ["pane", "acqua", "vino"];

export function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={
              <div>
                <div>
                  Header:
                  <Link to="personale">Personale</Link>,
                  <Link to="prodotti">Prodotti</Link>
                </div>
                <div>
                  <Outlet />
                </div>
                <div>
                  Footer:
                  <MyNavigationLink to="personale">Personale</MyNavigationLink>,
                  <MyNavigationLink to="prodotti">Prodotti</MyNavigationLink>
                </div>
              </div>
            }
          >
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="personale" element={<h1>Personale</h1>} />
            <Route
              path="prodotti"
              element={
                <div>
                  <h1>Prodotti</h1>
                  {listaProdotti.map((prodotto) => {
                    return (
                      <div key={prodotto}>
                        <Link to={prodotto}>{prodotto}</Link>
                      </div>
                    );
                  })}
                </div>
              }
            />
            <Route path="prodotti/:productId" element={<ProductPage />} />
          </Route>
        )
      )}
    />
  );
}

function MyNavigationLink({
  to,
  children
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        backgroundColor: isActive ? "gray" : "transparent"
      })}
    >
      {children}
    </NavLink>
  );
}

function ProductPage() {
  const { productId } = useParams();
  return (
    <div>
      <h1>{productId}</h1>
      <p>Lorem Ipsum about {productId}</p>
    </div>
  );
}
