import React from "react";
import Container from "../components/Container";
import Navbar from "../components/patials/Navbar";
import Sidebar from "../components/patials/Sidebar";

const SearchPage = () => {
  return (
    <div className="flex">
      <div className="w-[30%] fixed">
        <Sidebar />
      </div>
      <div className="w-[80%] absolute right-0">
        <Navbar active={true} isSearch={true} />
      </div>
    </div>
  );
};

export default SearchPage;
