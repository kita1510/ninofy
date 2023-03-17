import React, { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import supabase from "../configs/supabase";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import axios from "axios";
import { getTokenFromResponse } from "../services/spotify";
import SpotifyWebApi from "spotify-web-api-node";

const HomePage = () => {
  const [user, setUser] = useState<User | null>();
  const [accessToken, setAccessToken] = useState("");
  const [playlists, setPlayLists] = useState();
  const s = new SpotifyWebApi();

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    setUser(data?.user);
  };

  async function getPlayList() {
    const data = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc5MDMzMTIwLCJzdWIiOiJjZjgwZWQ1Zi0wM2MxLTQ1MjMtYWFkMy1lZmM4NzUxYWE4MmUiLCJlbWFpbCI6ImxvdmV5b3UxNTEwMjAwMkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImdpdGh1YiIsInByb3ZpZGVycyI6WyJnaXRodWIiXX0sInVzZXJfbWV0YWRhdGEiOnsiYXZhdGFyX3VybCI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS85Mzg0OTkyMD92PTQiLCJlbWFpbCI6ImxvdmV5b3UxNTEwMjAwMkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoiTmd1eeG7hW4gTHXDom4iLCJpc3MiOiJodHRwczovL2FwaS5naXRodWIuY29tIiwibmFtZSI6Ik5ndXnhu4VuIEx1w6JuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGhhbmhsdWFuMTUiLCJwcm92aWRlcl9pZCI6IjkzODQ5OTIwIiwic3ViIjoiOTM4NDk5MjAiLCJ1c2VyX25hbWUiOiJ0aGFuaGx1YW4xNSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNjc5MDI5NTIwfV0sInNlc3Npb25faWQiOiI1YmEwNjEzMy1kNTJjLTQzZjAtOGU1Ny0wNmJiZGFiMjVmZGMifQ.BXi7isy_3ag0jsDNTvYGZaUHIT3FygOf4oEcSZBysrQ",
        // "AQCCVekavhLub-Zp82CWuo6mfMSfFBljIBlhnDr9oDVlxHEUemrJ9BLncHigYPS5vaOZOtKdx5IIa4FJ6xSZPbUEIqV4AyR8kHTnFrerIKUEgLObUKqmiwzAyqN_umEDjvU_qySeFMA1adEbRvN7Q23nFu9OcTVepkjTlm3zL7TgqOforKtvgauXwU0orkJ6n9fpNlPdlKbn32lcb83pksHcJWSPr0edl69Az8-A4JhB_0XmzCAgWgL8tlWGZV4a2ZEthg7_Dt1TiDUW0wVwL-NM4B3vnx9l0MRzjfBiYR4MknI2fACfuglSY9wzDu3WqJ4apFYMjA",
        Accept: "application/json",
      },
    });
    setPlayLists(data);
  }

  const code = new URLSearchParams(window.location.search)

  useEffect(() => {
    getPlayList();
    return () => {};
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;
    console.log(_token)
    if(_token){
      s.setAccessToken(_token)
    }
  },[])

  console.log(s);
  console.log(code);

  return (
    <div className="flex">
      <div className="w-[30%] fixed">
        <Sidebar />
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar />
        <Container />
      </div>
    </div>
  );
};

export default HomePage;
