/** @format */

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import supabase from "../lib/supabase";
import { AuthUser } from "../types";
import { useCookies, Cookies } from "react-cookie";
const AuthContext = createContext<AuthUser | null>(null!);

const accessTokenCookieName = "sb-access-token";
const refreshTokenCookieName = "sb-refresh-token";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser>(null!);
  const accessCookie = useCookies([accessTokenCookieName]);
  const refreshCookie = useCookies([refreshTokenCookieName]);

  // Check cookies
  useEffect(() => {
    const currentDate = new Date();
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session || currentDate.getMilliseconds() >= session.expires_at!) {
        setUser(null!);
        accessCookie[2](accessTokenCookieName);
        refreshCookie[2](refreshTokenCookieName);
      }
    };
    getSession();
  }, []);

  // Get user from database
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return null;

      const { data: profileUser } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();
      setUser(profileUser);
    };
    getUser();
  }, []);

  //Listen auth event by onAuthStateChange
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session) {
        setUser(null!);
        accessCookie[2](accessTokenCookieName);
        refreshCookie[2](refreshTokenCookieName);
        return;
      }
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (event === "SIGNED_OUT") {
        setUser(null!);
      } else if (event === "SIGNED_IN") {
        const { data: profileUser } = await supabase
          .from("users")
          .select("*")
          .eq("id", user?.id)
          .single();
        setUser(profileUser);
      }
      // Set cookie
      const token = session.access_token;
      const refreshToken = session.refresh_token;

      accessCookie[2](accessTokenCookieName);
      accessCookie[1](accessTokenCookieName, token, {
        maxAge: 604800,
        path: "/",
      });
      refreshCookie[2](refreshTokenCookieName);
      refreshCookie[1](refreshTokenCookieName, refreshToken, {
        maxAge: 604800,
        path: "/",
      });
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => {
  return useContext(AuthContext);
};
