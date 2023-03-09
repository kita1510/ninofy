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
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    navigate("/");
  };
  const signInWithGitHub = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full h-[560px] justify-center items-center gap-5">
      <Button
        className="w-60 flex gap-4 text-sm"
        color="green"
        onClick={signInWithSpotify}
      >
        <BsSpotify className="w-5 h-5" />
        <span>Login with Spotify</span>
      </Button>
      <Button
        className="w-60 flex gap-4 text-sm"
        color="red"
        onClick={signInWithGoogle}
      >
        <BsSpotify className="w-5 h-5" />
        <span>Login with Google</span>
      </Button>
      <Button
        className="w-60 flex gap-4 text-sm text-white"
        color="purple"
        onClick={signInWithGitHub}
      >
        <BsSpotify className="w-5 h-5" />
        <span>Login with Github</span>
      </Button>
    </div>
  );
};

export default Login;
