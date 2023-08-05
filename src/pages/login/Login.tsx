import supabase from "../../lib/supabase";
import { FcGoogle } from "react-icons/fc";
import { SiDiscord, SiSpotify } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { Provider } from "@supabase/gotrue-js";
import Button from "../../components/shared/Button";
import Image from "../../components/shared/Image";

const Login = () => {
  const handleSignIn = (provider: Provider) => async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider });
  };
  return (
    <div className="w-full h-[768px] bg-black font-semibold flex relative">
      <div className="w-3/5 h-full">
        <Image
          className="w-full h-full object-cover"
          src={"https://images8.alphacoders.com/131/1318148.png"}
          alt=""
        />
      </div>
      <div className="w-2/3 flex items-center justify-center flex-col gap-6 bg-stone-800 ">
        <Button
          className="bg-green-600 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-green-800"
          onClick={handleSignIn("github")}
          LeftIcon={SiSpotify}
          iconClassName="text-2xl"
        >
          Login with Spotify
        </Button>
        <Button
          className="bg-red-700 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-red-900"
          onClick={handleSignIn("google")}
          LeftIcon={FcGoogle}
          iconClassName="text-2xl"
        >
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
