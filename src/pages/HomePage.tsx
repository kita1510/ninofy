import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../configs/supabase";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default HomePage;
