import { useState } from "react";
import { Button } from "@material-tailwind/react";

const dashboard = () => {
  const [startDate, setStartDate] = useState("");
  return (
    <div className="w-full h-full">
      <p className="text-2xl font-bold ">Organisation Details</p>
      <div className="w-full border-2">
        <p className="text-lg ">Details of Organisation</p>
        <div className="flex flex-col lg:flex-row items-center justify-between border-2 gap-4">
          <div className="text-md text-gray-800 font-semibold w-full border-2">
            Organisation name
            <div className="">
              <p className=" border-2 border-gray-500 p-2 gap-x-2 w-">hello</p>
            </div>
          </div>

          <div className=" w-full  border-2">
            <p className="text-md flex">
              About Organisation (Will be auto filled if org selected from list)
            </p>
            <div className=" border-2 border-gray-500 p-2 gap-x-2 ">hello</div>
          </div>
        </div>

        <div className="w-full border-2">
          <p className="text-lg ">Tournament Details</p>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-md text-gray-800 font-semibold w-full border-2">
              Tournament name
              <div className="">
                <p className=" border-2 border-gray-500 p-2 gap-x-2 w-">
                  hello
                </p>
              </div>
            </div>

            <div className=" w-full  border-2">
              <p className="text-md flex">
                About Tournament (Will be auto filled if org selected from list)
              </p>
              <div className=" border-2 border-gray-500 p-2 gap-x-2 ">
                hello
              </div>
            </div>
          </div>
        </div>

        <div className="w-full gap-x-2 bg-red ">
          <div className=" mt-2 flex flex-col lg:flex-row gap-x-2">
            <div className="w-full mt-4">
              <label htmlFor="start"></label>
              <input
                type="date"
                id="start"
                label="start"
                className="border border-gray-500 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <p className="py-7">to</p>
            <div className="w-full mt-4">
              <label htmlFor="start"></label>
              <input
                type="date"
                id="start"
                label="start"
                className="border border-gray-500 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-3xl px-40 font-bold ">Game Details</p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="border border-gray-500 w-1/2 gap-2 ">
          <div className="m-2 p-2 flex flex-col items-start gap-3">
            <p className="">Name of Competition</p>
            <p className="">Game Details</p>
            <p className="">Prize Pool</p>
            <p className="">Additional Information</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="">
                <Button color="orange">Participate</Button>
              </a>
            </div>
          </div>
        </div>
        <div className="border border-gray-500 w-1/2 gap-2 ">
          <div className="m-2 p-2 flex flex-col items-start gap-3">
            <p className="">Name of Competition</p>
            <p className="">Game Details</p>
            <p className="">Prize Pool</p>
            <p className="">Additional Information</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="">
                <Button color="orange">Participate</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="border border-gray-500 w-1/2  ">
          <div className="m-2 p-2 flex flex-col items-start gap-3">
            <p className="">Name of Competition</p>
            <p className="">Game Details</p>
            <p className="">Prize Pool</p>
            <p className="">Additional Information</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="">
                <Button color="orange">Participate</Button>
              </a>
            </div>
          </div>
        </div>
        <div className=" border border-gray-500 w-1/2  ">
          <div className="m-2 p-2 flex flex-col items-start gap-3">
            <p className="">Name of Competition</p>
            <p className="">Game Details</p>
            <p className="">Prize Pool</p>
            <p className="">Additional Information</p>
            <div className="mt-3 flex items-center gap-2">
              <a href="">
                <Button color="orange">Participate</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;