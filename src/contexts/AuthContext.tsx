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

const AuthContext = createContext<AuthUser | null>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser>(null!);

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

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (event === "SIGNED_OUT") {
        setUser(null);
      } else if (event === "SIGNED_IN") {
        const { data: profileUser } = await supabase
          .from("users")
          .select("*")
          .eq("id", user?.id)
          .single();
        setUser(profileUser);
      }
    });
  });

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => {
  return useContext(AuthContext);
};
