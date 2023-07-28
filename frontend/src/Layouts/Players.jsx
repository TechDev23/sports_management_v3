import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/Common"

const Players = () => {
  return (
    <div className="grid w-full">
      <Navbar/>
    <div className="w-full h-screen">
        <Outlet/>
    </div>
  </div>
  )
}

export default Players