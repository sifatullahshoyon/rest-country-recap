import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleCountryData from "./components/SingleCountryData/SingleCountryData.jsx";
import Countries from "./components/Countries/Countries.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "country",
        element: <Countries />,
      },
      {
        path: "/country/:code",
        element: <SingleCountryData />,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/alpha/${params.code}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
