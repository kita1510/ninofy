import React, { useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../configs/supabase";
import Sidebar from "../components/patials/Sidebar";
import Navbar from "../components/patials/Navbar";
import Container from "../components/Container";
import ControllerBar from "../components/ControllerBar";

const HomePage = () => {
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex relative">
      <div className="w-[30%] fixed">
        <Sidebar />
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar active={true} isSearch={false} />
        <Container />
      </div>
    </div>
  );
};

export default HomePage;
