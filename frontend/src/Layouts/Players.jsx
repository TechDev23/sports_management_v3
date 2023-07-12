import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/Common"

const Players = () => {
  return (
    <div className="grid w-full border-2 border-purple-400 border-solid ">
    <Navbar/>
    <div className="w-full h-screen border-2 border-green-500 border-solid">
        <Outlet/>
    </div>
  </div>
  )
}

export default Players