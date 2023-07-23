import { HiOutlineDownload } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineControl } from "react-icons/ai";
import { MdNewLabel } from "react-icons/md";
import { BsPlayFill, BsCheck2Circle } from "react-icons/bs";
import { IoIosArrowUp } from 'react-icons/io'
// import FaMoneyBillTrendUp from 'react-icons/fa'

const Dashboard = () => {
  return (
    <div className="h-full">
      <HeaderConent />
      <div className="grid gap-6 grid-cols-8 mt-8">
        <div className="col-span-5 h-72 w-full bg-white shadow-md rounded-lg flex gap-2 flex-col ">
          <TournamentsUpdate />
        </div>
        <div className="w-full col-span-3 bg-white shadow-md h-72 rounded-lg"> bar chart</div>
        <div className="col-span-3 bg-white shadow-md h-72 rounded-lg">pie chart</div>
        <div className="col-span-5 bg-white shadow-md h-72 rounded-lg">
          <GamesUpdate />
        </div>
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
  const tuItems = [
    {
      icon: MdNewLabel,
      label: "new",
      heading: 1,
      subheading: "+1 from yesterday",
      color: "pink",
      iconBg:"bg-pink-300",
      textColor: "text-pink-300"
    },
    {
      icon: BsPlayFill,
      label: "in progress",
      heading: 1,
      subheading: "+1 from yesterday",
      color: "orange",
      iconBg:"bg-orange-300",
      textColor: "text-orange-300"
    },
    {
      icon: BsCheck2Circle,
      label: "completed",
      heading: "16/20",
      subheading: "+1 from yesterday",
      color: "blue",
      iconBg:"bg-blue-300",
      textColor: "text-blue-300"
    },
  ];
  return (
    <>
      <div className="p-2">
        <h1 className="font-poppins capitalize font-semibold text-lg px-2 mt-1">
          tournament updates
        </h1>
      </div>
      <div className="h-auto flex-1 flex gap-2 p-3 font-poppins">
        {/* Single item starts */}
        {tuItems.map((item, index) => 
          (
            <div key={index} className={`bg-${item.color}-50 flex-1 rounded-xl flex flex-col items-start pt-6 pl-5 gap-4`}>
              <div className="flex items-center justify-center gap-2">
                <div className={`rounded-full ${item.iconBg} w-10 h-10 flex items-center justify-center text-white text-xl`}>
                  <item.icon/>
                </div>
                <h1 className={`${item.textColor} capitalize text-lg`}>{item.label}</h1>
              </div>
              <h1 className={`${item.textColor} text-4xl pl-2 font-bold`}>{item.heading}</h1>
              <p className={`${item.textColor} text-sm`}>{item.subheading}</p>
            </div>
          )
        )}
        {/* Single item ends */}
      </div>
    </>
  );
}

function GamesUpdate(){
  const guItems = [
    {
      icon: MdNewLabel,
      label: "data",
      heading: 1,
      subheading: "+1 from yesterday",
      bgColor: "bg-purple-50",
      iconBg:"bg-purple-300",
      textColor: "text-purple-300"
    },
    {
      icon: BsPlayFill,
      label: "revenue",
      heading: "Rs 23000",
      subheading: "+1 from yesterday",
      bgColor: "bg-yellow-50",
      iconBg:"bg-yellow-300",
      textColor: "text-yellow-300"
    },
    {
      icon: BsCheck2Circle,
      label: "completed",
      heading: "16/20",
      subheading: "+1 from yesterday",
      bgColor: "bg-teal-50",
      iconBg:"bg-teal-300",
      textColor: "text-teal-300"
    },
  ];
  return (
    <>
      <div className="p-2">
        <h1 className="font-poppins capitalize font-semibold text-lg px-2 mt-1">
          game updates
        </h1>
      </div>
      <div className="h-60 flex-1 flex gap-2 p-3 font-poppins">
        {/* Single item starts */}
        {guItems.map((item, index) => 
          (
            <div key={index} className={`${item.bgColor} flex-1 rounded-xl flex flex-col items-start pt-6 pl-5 gap-4`}>
              <div className="flex items-center justify-center gap-2">
                <div className={`rounded-full ${item.iconBg} w-10 h-10 flex items-center justify-center text-white text-xl`}>
                  <item.icon/>
                </div>
                  <h1 className={`text-green-500 capitalize text-md flex items-center `}> <IoIosArrowUp/> 60%</h1>
              </div>
                <h1 className={` capitalize text-lg`}>{item.label}</h1>
              <h1 className={` text-2xl pl-2 font-bold`}>{item.heading}</h1>
              <p className={` text-sm`}>{item.subheading}</p>
            </div>
          )
        )}
        {/* Single item ends */}
      </div>
    </>
  )
}
