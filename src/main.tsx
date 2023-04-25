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

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={client}>
        <SpotifyProvider>
          <PlayerProvider>
            <AuthProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AuthProvider>
          </PlayerProvider>
        </SpotifyProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
