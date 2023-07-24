import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./pages/Track/CardDetail";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import ControllerBar from "./components/controls/ControllerBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="w-full h-[768px] bg-spotify-300">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/music/:id" element={<CardDetail />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="w-full h-[90px] fixed bottom-0 z-[999] bg-spotify-200 border-t-[1px] border-slate-700 ">
        <ControllerBar />
      </div>
    </div>
  );
}

export default App;
