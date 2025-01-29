import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SinglePage from "../pages/SinglePage";
// import SignIn from "../pages/SignIn";
// import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },

      {
        index: true,
        path: "/product/:id",
        element: <SinglePage />,
      },
      // {
      //   index: true,
      //   path: "/signup",
      //   element: <SignUp />,
      // },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
