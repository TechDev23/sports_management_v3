import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Common";
import { Sidebar } from "../Components/Organizer";

const Organizers = () => {
  return (
    <div className="h-full w-full border-solid ">
      <Navbar />

      <div className="flex h-full w-full">
        {/* Mobile view */}
        <div className="absolute md:hidden ">
          <Sidebar /> 
        </div>
        {/* Screen larger than medium */}
        <div className="block">
          <Sidebar /> 
        </div>

        <div className="w-full h-full">

        {/**
          <Submenu /> */}
          <div className="w-full h-full border-2 border-blue-400 p-5 bg-gray-50">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
