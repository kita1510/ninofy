/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SPOTIFY_ID: string;
  readonly VITE_SPOTIFY_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMeta;
}
