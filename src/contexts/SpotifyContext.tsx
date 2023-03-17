import React, { createContext, ReactNode, useEffect, useState } from "react";

export const SpotifyContext = createContext<any>(null!);

const SpotifyProvider = ({ children }: { children: ReactNode }) => {
  const clientId = import.meta.env.VITE_SPOTIFY_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_SECRET;
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    var authParameter = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
    };

    fetch("https://accounts.spotify.com/api/token", authParameter)
      .then((res) => res.json())
      .then((res) => setAccessToken(res?.access_token));
  }, []);
  return (
    <SpotifyContext.Provider value={accessToken}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;

export const useAccessToken = () => {
  return React.useContext(SpotifyContext);
};
