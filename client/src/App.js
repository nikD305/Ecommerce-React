import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Layout = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>

      <Navbar />
      </Suspense>
      {/* Outlet component is used to render the matched child(children) component(Home). */}
      <Outlet />
      <Footer />
    </div>
  );
};

const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const Product = lazy(() => import("./pages/Product/Product"));
const Wishlist = lazy(() => import("./components/wishlist/Wishlist"));
const ShopCart = lazy(() => import("./pages/shopCart/ShopCart"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "/wishlist/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "/cart/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ShopCart />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
