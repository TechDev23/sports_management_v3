import { HiOutlineDownload } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { MdNewLabel } from "react-icons/md";
import { BsPlayFill, BsCheck2Circle } from "react-icons/bs"

const Dashboard = () => {
  return (
    <div className="h-auto">
      <HeaderConent />
      <div className="grid gap-6 grid-cols-5 mt-8">
        <div className="col-span-3 h-60 bg-white shadow-md rounded-lg flex gap-2 flex-col">
          <TournamentsUpdate />
        </div>
        <div className="col-span-2 bg-white shadow-md h-64 rounded-lg"></div>
        <div className="col-span-2 bg-white shadow-md h-48 rounded-lg"></div>
        <div className="col-span-3 bg-white shadow-md h-48 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;

function HeaderConent() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-2 items-center font-poppins text-sm">
      <h1 className="col-span-full md:col-span-3 text-3xl font-bold font-poppins">
        Dashboard
      </h1>
      <div className="bg-gray-100 col-span-2 md:col-span-3 h-full w-full rounded-lg flex items-center justify-center gap-2 px-4">
        <BiSearch className="text-gray-700" />
        <input
          placeholder="search"
          className="w-full h-full bg-gray-100 font-poppins !outline-none"
        />
      </div>
      <div className="md:col-span-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex gap-2 h-full rounded-lg hover:cursor-pointer items-center justify-center ">
        {" "}
        <HiOutlineDownload /> Download
      </div>
      <div className="md:col-span-1 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center w-max px-4 text-xl h-full rounded-lg hover:cursor-pointer">
        <AiOutlineControl />
      </div>
    </div>
  );
}

function TournamentsUpdate() {
  return (
    <>
      <div className="p-2">
        <h1 className="font-poppins capitalize font-semibold text-lg px-2">
          tournament updates
        </h1>
      </div>
      <div className="h-auto flex-1 flex gap-2 px-3 pb-3 font-poppins">
        {/* Single item starts */}
        <div className="bg-green-50 flex-1 rounded-xl flex flex-col items-start pt-6 pl-5 gap-2">
          <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-300 w-10 h-10 flex items-center justify-center text-white text-xl">
            <MdNewLabel />
          </div>
          <h1 className="text-green-300 font-semibold text-lg">New</h1>
          </div>
          <h1 className="text-4xl pl-2 font-bold">1</h1>
          <p className="text-light-blue-500">+1 from yesterday</p>
        </div>
        {/* Single item ends */}
        {/* Single item starts */}
        <div className="bg-pink-50 flex-1 rounded-xl flex flex-col items-start pt-6 pl-5 gap-2">
          <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-pink-300 w-10 h-10 flex items-center justify-center text-white text-xl">
            <BsPlayFill />
          </div>
          <h1 className="text-pink-300 font-semibold text-lg">In Progress</h1>
          </div>
          <h1 className="text-pink-300 text-4xl pl-2 font-bold">3</h1>
          <p className=" text-light-blue-500">+1 from yesterday</p>
        </div>
        {/* Single item ends */}
        
        {/* Single item starts */}
        <div className="bg-orange-50 flex-1 rounded-xl flex flex-col items-start pt-6 pl-5 gap-2">
          <div className="flex items-center justify-center gap-2">
          <div className="rounded-full bg-orange-300 w-10 h-10 flex items-center justify-center text-white text-xl">
            <BsCheck2Circle />
          </div>
          <h1 className="text-orange-300 font-semibold text-lg">Completed</h1>
          </div>
          <h1 className="text-2xl pl-2 font-bold text-orange-300">16/20</h1>
          <p className="pt-2 text-light-blue-500">+1 from yesterday</p>
        </div>
        {/* Single item ends */}

      </div>
    </>
  );
}
