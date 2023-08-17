import { useState } from "react";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiCalendarAlt } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
 
const TABS = [
  {
    label: "New",
    value: "New",
  },
  {
    label: "In Progress",
    value: "Progress",
  },
  {
    label: "Completed",
    value: "Completed",
  },
];
 
const TABLE_HEAD = ["Organization", "Priority", "Due Date", "Progress", "Role", "Team"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    org: "PICT Sports club",
    tournament: "Elevate 2.0",
    priority: "low",
    date: "23/04/2018",
    progress: 70,
    role: "Admin",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    org: "College : VIT",
    tournament: "Inter College Sports",
    priority: "high",
    date: "23/04/2018",
    progress: 60,
    role: "Admin",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    org: "IIT Bombay",
    tournament: "Inter college Athlethon",
    priority: "medium",
    date: "19/09/2017",
    progress: 80,
    role: "Organizer",
  },
  /** {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },*/
];


function Team() {
    return (
        <div className="flex items-center -space-x-4">
          <Avatar
            variant="circular"
            alt="user 1"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 2"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 3"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 4"
            size="sm"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />
        </div>
      );
}

 
export function Table() {

    const navigate = useNavigate();
    
  const [dueDate, setDueDate] = useState(null);

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row z-50">
          <Tabs value="all" className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-2/5 z-0">
            <TabsHeader className="">
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value} className="text-xs md:text-md">
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="text-sm z-50  rounded-lg flex justify-center items-center gap-2">
                <p className="text-xs ">Sort by: Due date</p>
                <input 
                    type="date"
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    id="birthday"
                    name="birthday" 
                    className=" px-4 py-2 z-50 rounded-lg border focus:outline-none  focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-xs md:text-normal"
                />
            </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, org, tournament, priority, date, role, progress }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={org} className="hover:bg-gray-100 transition-all cursor-pointer"  onClick={() => navigate("/o/current/step1")}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={org} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {org}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {tournament}
                        </Typography>
                      </div>
                    </div>
                  </td>

                  
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={priority}
                        color={priority === "low" ? "green" : priority === "medium" ? "yellow" : "red"}
                      />
                    </div>
                  </td>


                  
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal flex items-center space-x-3">
                        <BiCalendarAlt/>
                        <p>{date}</p>
                    </Typography>
                  </td>

                  
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal flex">
                        <Tooltip content={`${progress}%`}>
                            <Progress size="sm"  value={progress} color="amber" />
                        </Tooltip>
                    </Typography>
                  </td>


                  <td className={classes}>
                    <div className="flex flex-row justify-start items-center space-x-2  p-0">
                        { role === "Admin" ? <MdAdminPanelSettings className="w-6 h-6 text-orange-700"/> : <BsShieldCheck  className="w-5 h-5 text-blue-gray-700"/>}
                      <Typography variant="small" color="blue-gray" className={`font-normal flex justify-start items-start ${role === "Admin" ?  "text-orange-700" : "text-blue-gray-700"}`}>
                        {role}
                      </Typography>
                    </div>
                  </td>
                
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      <Team/>
                    </Typography>
                  </td>


                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}