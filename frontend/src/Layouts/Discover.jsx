import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Common";

export default function Discover ()  {
  return (
    <div className="grid w-full ">
    <Navbar/>
    <div className="w-full h-screen ">
        <Outlet/>
    </div>
  </div>
  )
}

