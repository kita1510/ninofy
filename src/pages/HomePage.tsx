import React, { useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../lib/supabase";
import ControllerBar from "../components/controls/ControllerBar";
import Layout from "../components/layouts/Layout";
import Container from "../components/Container";

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
    <React.Fragment>
      <Layout>
        <Container></Container>
      </Layout>
    </React.Fragment>
  );
};

export default HomePage;
