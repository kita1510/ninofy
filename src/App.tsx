import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetail from "./pages/track/CardDetail";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/login/Login";
import SearchPage from "./pages/search/SearchPage";
import ControllerBar from "./components/controls/ControllerBar";
import { ToastContainer } from "react-toastify";
import PlaylistDetail from "./pages/playlist/PlaylistDetail";

function App() {
  const location = new URL(window.location.href);

  const isLoginPage = location.pathname.includes("/login");

  console.log(isLoginPage);

  return (
    <div className="w-full h-[768px] bg-spotify-300">
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
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
        <Route path="/playlist/" element={<PlaylistDetail />} />
      </Routes>
      {!isLoginPage && (
        <div className="w-full h-[90px] fixed bottom-0 z-[999] bg-spotify-100 ">
          <ControllerBar />
        </div>
      )}
    </div>
  );
}

export default App;
