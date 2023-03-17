import SpotifyWebApi from "spotify-web-api-node";

const spotifyAPI = new SpotifyWebApi({
  clientId: import.meta.env.VITE_SPOTIFY_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_SECRET,
  redirectUri: import.meta.env.VITE_SUPABASE_URL + "auth/v1/callback",
});

export default spotifyAPI