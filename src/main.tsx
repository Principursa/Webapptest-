import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import About from "./Routes/About";
import Contracts from "./Routes/Contracts.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import Home from "./Home";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider,createClient} from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css";

import {config} from "./configs/config"
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contracts",
        element: <Contracts />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <WagmiProvider config={config}>

<QueryClientProvider client={queryClient}>
    <RainbowKitProvider >
        <RouterProvider router={router} />

    </RainbowKitProvider>
</QueryClientProvider>
      </WagmiProvider>
  </React.StrictMode>
);
