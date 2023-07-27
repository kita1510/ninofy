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
import PlayerProvider from "./contexts/PlayerContext";
import { CookiesProvider } from "react-cookie";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <CookiesProvider>
          <SpotifyProvider>
            <PlayerProvider>
              <AuthProvider>
                <BrowserRouter>
                  <App />
                </BrowserRouter>
              </AuthProvider>
            </PlayerProvider>
          </SpotifyProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  // </React.StrictMode>
);
