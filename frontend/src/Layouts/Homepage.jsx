import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Common";

export default function Discover ()  {
  return (
    <div className="min-h-full">
        <Navbar/>
        {/* something */}
      <div className="w-full h-full">
          <Outlet/>
      </div>
  </div>
  )
}