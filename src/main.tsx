/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import SpotifyProvider from "./contexts/SpotifyContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";
import SongProvider from "./contexts/SongContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <SpotifyProvider>
          <SongProvider>
            <AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>
          </SongProvider>
        </SpotifyProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
