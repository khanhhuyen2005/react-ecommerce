import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import ProductsPage from "../pages/Products";
import AboutPage from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "products",
      element: <ProductsPage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    
  ]);

  export default router;