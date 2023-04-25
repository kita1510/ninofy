import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import ControllerBar from "./components/ControllerBar";
import Motion from "./components/Motion";
import PlayList from "./components/PlayList";
import SongList from "./components/SongList";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="w-full h-[768px] bg-spotify-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/motion" element={<Motion />}></Route>
        <Route path="/music/:id" element={<CardDetail />}></Route>
        <Route path="/songlist" element={<SongList />}></Route>
        <Route path="/playlist" element={<PlayList />}></Route>
      </Routes>
        <div className="w-full h-[90px] fixed bottom-0 z-[999999] bg-spotify-200 border-t-[1px] border-slate-700 ">
          <ControllerBar />
        </div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
