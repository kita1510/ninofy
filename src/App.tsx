import React from "react";
import { Route, Routes } from "react-router-dom";
import Motion from "./components/Motion";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-full min-h-[680px] bg-spotify-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/motion" element={<Motion/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
