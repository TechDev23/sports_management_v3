
// import { Input, Select, Option, ButtonGroup, Button, Textarea } from "@material-tailwind/react";
import { useState } from "react";

import { Rosters, Details, Participants, SetOperations, Certifications } from "./StepOperations";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


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

  
  return (
    <div className="w-full h-full mt-3">
      <div className="my-5 min-w-100% min-h-full flex flex-row">
        <Tabs value="details" className="w-full">
          <TabsHeader
            className="min-w-full text-sm flex flex-row items-center justify-center bg-orange-600 p-1 rounded-md lg:mb-4 space-x-1 sm:space-x-1 text-white hover:text-orange-600 focus:text-orange-400"
            indicatorProps={{
              className:
                "hover:shadow-lg rounded-md bg-orange-600 hover:text-orange-600 focus:bg-white focus:text-orange-400",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} className="text-white text-sm  px-0.5">
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className="">
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className="w-full">{desc}</div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}