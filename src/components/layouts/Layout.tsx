import React, { ReactNode } from "react";
import ControllerBar from "../controls/ControllerBar";
import Navbar from "../partials/Header";
import Sidebar from "../partials/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex relative">
      <div className="w-[290px] fixed">
        <Sidebar />
      </div>
      <div className=" w-[calc(100%-290px)] absolute left-[290px]">
        <Navbar active={true} />
        {children}
      </div>
      {/* <div className="w-full h-[90px] fixed bottom-0 z-[999999] bg-spotify-200 border-t-[1px] border-slate-700 ">
        <ControllerBar />
      </div> */}
    </div>
  );
};

export default Layout;
