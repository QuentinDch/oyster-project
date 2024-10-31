import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App.jsx";
import Home from "./components/pages/Home";
import Reservation from "./components/pages/Reservation";
import Contact from "./components/pages/Contact";
import Information from "./components/pages/Information";
import "./sass/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/reservation", element: <Reservation /> },
      { path: "/contact", element: <Contact /> },
      { path: "/information", element: <Information /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
