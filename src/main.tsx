import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import OpenMedia from "./pages/OpenMedia";
import Hostname from "./pages/Servername";
import Audiomix from "./pages/Audiomix";
import AICut from "./pages/AICut";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="openmedia" element={<OpenMedia />} />
      <Route path="audiomix" element={<Audiomix />} />
      <Route path="hostname" element={<Hostname />} />
      <Route path="aicut" element={<AICut />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
