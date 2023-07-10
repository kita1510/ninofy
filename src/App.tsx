import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/playlists/CardDetail";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="w-full h-[768px] bg-spotify-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/music/:id" element={<CardDetail />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
