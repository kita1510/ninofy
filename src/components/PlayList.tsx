import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const PlayList = () => {
  const accessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc5MDI0MzM0LCJzdWIiOiI1YzhhMzMyOS05ZDBlLTRjNDctOWEwYy0zOTBjNzZlNDdlMmYiLCJlbWFpbCI6ImRha25nb2trdEBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6InNwb3RpZnkiLCJwcm92aWRlcnMiOlsic3BvdGlmeSJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImRha25nb2trdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZnVsbF9uYW1lIjoidGh1IiwiaXNzIjoiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEiLCJuYW1lIjoidGh1IiwicHJvdmlkZXJfaWQiOiIzMTdsdWk1NDJmNTZkNzZwamRuN3Vxc2JnZWRxIiwic3ViIjoiMzE3bHVpNTQyZjU2ZDc2cGpkbjd1cXNiZ2VkcSJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNjc5MDIwNzM0fV0sInNlc3Npb25faWQiOiJjYmI2NDFlZC1kN2NjLTRiYzUtYWVhYi1iMzlkN2ZhOTBjZTQifQ.LpipTROOfu7wNfSSkZl_mdJUjDPXeyYRCashN85s6_c";

  async function getPlayList() {
    const data = await axios.get("", {
      headers: {
        Authorization: "Bearer" + accessToken,
        Accept: "application/json",
      },
    });
    return data;
  }

  const { data: playlist } = useQuery({
    queryKey: ["playlist"],
    queryFn: async () => {
      await getPlayList;
    },
  });

  console.log(playlist);

  return <div>PlayList</div>;
};

export default PlayList;
