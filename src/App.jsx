import React from "react";
import Home from "./pages/Home/Home";
import Root from './routes/Root'
import ErrorPage from './error-page'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        }

      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

    </div>
  );
};

export default App;
