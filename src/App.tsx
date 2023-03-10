import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail";
import Motion from "./components/Motion";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-full h-[800px] bg-spotify-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motion" element={<Motion/>}></Route>
        <Route path="/:id" element={<CardDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
