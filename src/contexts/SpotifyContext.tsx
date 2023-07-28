import React, { createContext, ReactNode, useEffect, useState } from "react";
import config from "../config";

export const SpotifyContext = createContext<string>("");

const SpotifyProvider = ({ children }: { children: ReactNode }) => {
  const clientId = config.spotifyId;
  const clientSecret = config.spotifySecret;
  const [accessToken, setAccessToken] = useState("");
  const url = "https://accounts.spotify.com/api/token";

  const authParameter = {
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

  useEffect(() => {
    fetch(url, authParameter)
      .then((res) => res.json())
      .then((res) => setAccessToken(res?.access_token));
  }, []);

  console.log(accessToken);

  return (
    <SpotifyContext.Provider value={accessToken || ""}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;

export const useSpotify = () => {
  return React.useContext(SpotifyContext);
};
