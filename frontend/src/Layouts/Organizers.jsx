import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Common";
import { Submenu, Sidebar } from "../Components/Organizer";

const Organizers = () => {
  return (
    <div className="h-screen w-full border-solid ">
      <Navbar />

      <div className="flex">
        {/* Mobile view */}
        <div className="absolute md:hidden">
          <Sidebar /> 
        </div>
        {/* Screen larger than medium */}
        <div className="block">
          <Sidebar /> 
        </div>

        <div className="w-full">
          <Submenu />
          <div className="h-screen px-6 py-4 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
