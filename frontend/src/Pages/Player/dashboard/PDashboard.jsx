import { useState } from "react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import { FiFacebook } from "react-icons/fi";
import { BiLink } from "react-icons/bi";

const PDashboard = () => {

  const games = [
    {
      organization: "Pune Institute of Computer Technology",
      tournament: "Elevate 2.0",
      organizer: "Priyanshu PM",
      desc: "The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. ",
      startDate: "22-08-2023",
      endDate: "01-09-2023"
    },
    {
      organization: "Pune Institute of Computer Technology",
      tournament: "Elevate 2.0",
      organizer: "Priyanshu PM",
      desc: "The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. ",
      startDate: "22-08-2023",
      endDate: "01-09-2023"
    },
    {
      organization: "Pune Institute of Computer Technology",
      tournament: "Elevate 2.0",
      organizer: "Priyanshu PM",
      desc: "The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. ",
      startDate: "22-08-2023",
      endDate: "01-09-2023"
    },
    {
      organization: "Pune Institute of Computer Technology",
      tournament: "Elevate 2.0",
      organizer: "Priyanshu PM",
      desc: "The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. ",
      startDate: "22-08-2023",
      endDate: "01-09-2023"
    },
    {
      organization: "Pune Institute of Computer Technology",
      tournament: "Elevate 2.0",
      organizer: "Priyanshu PM",
      desc: "The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. The organizer is the main component of the sports management website and it can be differentiated with the player. ",
      startDate: "22-08-2023",
      endDate: "01-09-2023"
    },
  ];

  return (
    <div className="w-full h-full font-poppins flex flex-col gap-4 ">
      <div className="w-full p-4 rounded-lg bg-white border  shadow-sm flex justify-start">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider"><span className="">Tournaments</span></p>
      </div>
      <div className="w-full h-full mt-5 shadow-sm  grid grid-cols-1 lg:grid-cols-2 gap-5">
      {
        games.map(({organization, tournament, organizer, desc, startDate, endDate})=> (

          <Card key={tournament} className="border-2 hover:border-2 hover:border-orange-300 transition-all text-black">
            <CardBody className="flex flex-col gap-4">

              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <p className="font-bold tracking-wider flex justify-start w-full text-3xl">{tournament}</p>
                  <div className="flex gap-3 justify-start sm:justify-end w-full sm:w-fit">
                    <p className="bg-gray-100 rounded-full p-2 text-blue-500 cursor-pointer"><FiFacebook className="w-6 h-6"/></p>
                    <p className="bg-gray-100 rounded-full p-2 text-blue-500 cursor-pointer"><BiLink className="w-6 h-6"/> </p>

                  </div>
                </div>
                <p className="text-md text-gray-700">{organization}</p>
                <div className="">
                  <p className="text-sm text-gray-700">Organizer : <span className="text-orange-500 italic px-2 bg-gray-100 rounded-lg">{organizer}</span></p>
                </div>
              </div>
                <p className="text-gray-700 text-sm">{ desc.length < 100 ? desc: `${desc.substring(0, 100)}...`}</p>
              <div className="w-full flex flex-col sm:flex-row gap-4">
                <div className="flex  gap-4 items-center md:pr-2 w-full text-xs xl:text-sm sm:w-2/3">
                  <p className="bg-green-50 text-green-500 p-2 rounded-lg">{startDate}</p>
                  <p className="bg-red-50 text-red-500 p-2 rounded-lg">{endDate}</p>
                </div>
                <div className="flex w-full sm:w-1/3 justify-start sm:justify-end">
                  <Button
                    onClick={()=>{}}
                    color="orange"
                  >Participate now</Button>
                </div>
             
              </div>
            </CardBody>
          </Card>
        ))
      }

      </div>

    </div>
  );
}

export default PDashboard;