import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="w-full h-[680px] bg-spotify-200">
      <Routes>  
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
