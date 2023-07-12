import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Organizer/Sidebar"
import { Navbar } from "../Components/Common"

const Organizers = () => {
  return (
    <div className="grid w-full border-2 border-purple-400 border-solid ">
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <div className="w-full h-screen border-2 border-green-500 border-solid">
      <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Organizers
