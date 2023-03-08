import React from "react";
import { Button } from "@material-tailwind/react";
import { BsSpotify } from "react-icons/bs";
import supabase from "../configs/supabase";
import "../configs/supabase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signInWithSpotify = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
    });
    navigate("/");
  };

  return (
    <div className="flex w-full h-[560px] justify-center items-center">
      <Button
        className="w-60 flex gap-4 text-sm"
        color="green"
        onClick={signInWithSpotify}
      >
        <BsSpotify className="w-5 h-5" />
        <span>Login with Spotify</span>{" "}
      </Button>
    </div>
  );
};

export default Login;
