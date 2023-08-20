
// import { Input, Select, Option, ButtonGroup, Button, Textarea } from "@material-tailwind/react";
import { useState } from "react";

import { Rosters, Details, Participants, SetOperations, Certifications } from "..";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CurrentStepper from "../../../../Common/CurrentStepper";
import { Link, Outlet, useNavigate } from "react-router-dom";


export default function Step5Update() {
  const data = [
    {
      label: "DETAILS",
      value: "details",
      desc: <Details/>,
    },
    {
      label: "PARTICIPANTS",
      value: "participants",
      desc: <Participants/>,
    },
    {
      label: "OPERATIONS",
      value: "operations",
      desc: <SetOperations/>,
    },
    {
      label: "ROSTERS",
      value: "rosters",
      desc: <Rosters />,
    },
    {
      label: "CERTIFICATIONS",
      value: "certifications",
      desc: <Certifications/>,
    },
  ];

  const navigate = useNavigate();
  
  return (
    <div className="w-full h-full mt-3">
      <div className="w-full">
      <CurrentStepper step={4}/>
    </div>
      <div className="my-5 min-w-100% min-h-full flex flex-row">
        <Tabs value="details" className="w-full">
          <TabsHeader
            className="font-poppins min-w-full text-sm flex flex-row items-center justify-center bg-orange-600 p-1 rounded-md lg:mb-4 space-x-1 sm:space-x-1 text-white hover:text-orange-600 focus:text-orange-400"
            indicatorProps={{
              className:
                "hover:shadow-lg rounded-md bg-orange-600 hover:text-orange-600 focus:bg-white focus:text-orange-400",
            }}
          >
            {data.map(({ label, value }) => (
              
              <Tab onClick={() => navigate(`/o/current/step5/${value}`)}  key={value} value={value} className="text-white text-sm  px-0.5">
              <Link>
                {label}
              </Link>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="">
            <Outlet/>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}