/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PlayerProvider from "./contexts/PlayerContext";
import { CookiesProvider } from "react-cookie";
import { Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <ThemeProvider>
    <QueryClientProvider client={client}>
      {/* <ReactQueryDevtools /> */}
        <CookiesProvider>
          <PlayerProvider>
            <AuthProvider>
              <BrowserRouter>
                <Suspense>
                  <App />
                </Suspense>
              </BrowserRouter>
            </AuthProvider>
          </PlayerProvider>
        </CookiesProvider>
    </QueryClientProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
