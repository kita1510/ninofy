import supabase from "../configs/supabase";
import { FcGoogle } from "react-icons/fc";
import { SiDiscord, SiSpotify } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import Button from "../components/shared/Button";

const Login = () => {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }
  async function signInWithDiscord() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  }
  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }
  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "spotify",
    });
  }
  return (
    <div className="w-full h-[768px] font-semibold flex rounded-full relative">
      <div className="w-[40%] h-full">
        <img
          className="w-full h-full object-cover"
          src={"https://rare-gallery.com/uploads/posts/501656-original-4k.jpg"}
          alt=""
        />
      </div>
      <div className="w-[70%] flex items-center justify-center flex-col gap-6 bg-stone-800 ">
        <div>
          <div className="text-[40px] font-bold text-white">ĐĂNG NHẬP</div>
        </div>
        <Button
          className="bg-green-600 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-green-800"
          onClick={signInWithSpotify}
        >
          <SiSpotify className="text-2xl " />
          <span>Login with Spotify</span>
        </Button>
        <Button
          className="bg-white w-[17rem] text-black rounded-sm flex justify-center items-center gap-4 hover:bg-slate-300"
          onClick={signInWithGithub}
        >
          <BsGithub className="text-2xl"></BsGithub>
          <span>Login with GitHub</span>
        </Button>
        <Button
          className="bg-red-700 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-red-900"
          onClick={signInWithGoogle}
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <span>Login with Google </span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
