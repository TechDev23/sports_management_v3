import { React, useState } from "react";
import user from './logo1.avif'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { useAppSelector } from "../../../redux/store";

// function generateUniqueTag() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let tag = "";
//   for (let i = 0; i < 6; i++) {
//     tag += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return tag;
// }

export default function ComplexNavbar() {
  const user = useAppSelector((state) => state.userState.user);

  const userInformation = {
    mobile_number: user?.phone_no || "931352345",
    name: user?.first_name || "name",
    verified: user?.verified || false,
    createdAt: user?.createdAt,
    email_id: user?.email_id || "om@gmail.com",
    emergency_contact: "null",
    dob: user?.dob,
    gender:user?.gender || "Male"
  };

   const [isNameEditing, setIsNameEditing] = useState(false);
   const [editedName, setEditedName] = useState(userInformation.name);

   const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(userInformation.email_id);

  const [isMobileEditing, setIsMobileEditing] = useState(false);
  const [editedMobile, setEditedMobile] = useState(userInformation.mobile_number);

  const [isEmergencyEditing, setIsEmergencyEditing] = useState(false);
  const [editedEmergency, setEditedEmergency] = useState(userInformation.emergency_contact);

  const [isDOBEditing, setIsDOBEditing] = useState(false);
  const [editedDOB, setEditedDOB] = useState(new Date(userInformation.dob));

  const [isGenderEditing, setIsGenderEditing] = useState(false);
const [editedGender, setEditedGender] = useState(userInformation.gender);

  const handleSaveName = () => {

    setIsNameEditing(false);
    userInformation.name = editedName;
  };

  const handleCancelName = () => {
    setIsNameEditing(false);
    setEditedName(userInformation.name);
  };

  const handleEditName = () => {
    setIsNameEditing(true);
  };

  const handleSaveEmail = () => {
    setIsEmailEditing(false);
    userInformation.email_id = editedEmail;
  };

  const handleCancelEmail = () => {
    setIsEmailEditing(false);
    setEditedEmail(userInformation.email_id);
  };

  const handleEditEmail = () => {
    setIsEmailEditing(true);
  };

  const handleSaveMobile = () => {
    setIsMobileEditing(false);
    userInformation.mobile_number = editedMobile;
  };

  const handleCancelMobile = () => {
    setIsMobileEditing(false);
    setEditedMobile(userInformation.mobile_number);
  };

  const handleEditMobile = () => {
    setIsMobileEditing(true);
  };

  const handleSaveEmergency = () => {
    setIsEmergencyEditing(false);
    userInformation.emergency_contact = editedEmergency;
  };

  const handleCancelEmergency = () => {
    setIsEmergencyEditing(false);
    setEditedEmergency(userInformation.emergency_contact);
  };

  const handleEditEmergency = () => {
    setIsEmergencyEditing(true);
  };

  const handleSaveDOB = () => {
    setIsDOBEditing(false);
    userInformation.dob = editedDOB.toISOString().split("T")[0];
  };

  const handleCancelDOB = () => {
    setIsDOBEditing(false);
    setEditedDOB(new Date(userInformation.dob));
  };

  const handleEditDOB = () => {
    setIsDOBEditing(true);
  };

  const handleSaveGender = () => {
    setIsGenderEditing(false);
    userInformation.gender = editedGender;
  };
  
  const handleCancelGender = () => {
    setIsGenderEditing(false);
    setEditedGender(userInformation.gender);
  };
  
  const handleEditGender = () => {
    setIsGenderEditing(true);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border-4 ml-32  mt-16 sticky top-48">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray" className="text-3xl">
              Account Settings
            </Typography>
          </div>
          <List>
            <ListItem className="mb-5 hover:bg-orange-200">
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Personal info
            </ListItem>
            <ListItem className="mb-5 hover:bg-orange-200">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Update payment details
            </ListItem>
            <ListItem className="mb-5 hover:bg-orange-200">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Security setting
            </ListItem>
            <ListItem className="mb-5 hover:bg-orange-200">
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Permissions
            </ListItem>
            <ListItem className="mb-5 hover:bg-orange-200">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Email notifications
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </List>
        </Card>

        <div className="flex-col w-full mr-64 lg:ml-32 max-w-[80rem] p-8 flex">
        <Card className="p-4 border-4 hover:shadow-xl  hover:shadow-blue-gray-150/5 transition-all duration-300 w-full md:max-w-[20rem] lg:max-w-[60rem]">
          <div className="profile-image relative">
          <div className="flex-row">
            <Avatar
              variant="circular"
              size="xl"
              alt="User Profile"
              src={user}
              className="mx-0 md:mx-auto md:ml-4 lg:ml-16 md:mt-16"
            />
           <div className="w-160 lg:ml-8 md:ml-0 mt-4 custom-id-text">
              <div className="text-blue-400 font-normal px-8 flex">
                <p className="mr-1">G-Sport ID: </p>
                <p className="ml-1">{user?.name}</p>
              </div>
            </div>
            </div>
          </div>

          
          <div className="ml-0 md:ml-4 lg:ml-16 sm:ml-4 mr-80 flex w-2/4">
          
            <div className="text-center md:text-left mt-16">
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="sm:text-left">
                  Full Name
                </Typography>
                <div className="flex sm:flex-row items-center gap-2">
                {isNameEditing ? (
               
  
        <>
        <div className="flex sm:flex-col items-center sm:items-start gap-2">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <div className="flex sm:flex-row gap-2">
           <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
            <button
            onClick={handleSaveName}
            className="text-white"
          >Save</button>
          </div>
          <div className="flex sm:flex-row gap-2">
          <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
            <button
            onClick={handleCancelName}
            className="text-gray-900"
            >Cancel</button>
            </div>
            </div>
            </div>
            </div>
        </>
      ) : (
        <>
        
          <Typography variant="body" color="gray">
            {userInformation.name}
          </Typography>
          
          <div className="flex-grow"></div>
          
            <button 
            onClick={handleEditName}
            className="text-blue-500 lg:ml-80"
          >Edit</button>
          
          
        </>
      )}
                </div>
                <hr className="my-2 hr-light" style={{ width: "170%"}} />
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray" className="sm:text-left">
                  Email
                </Typography>
                <div className="flex sm:flex-row items-center gap-2">
                {isEmailEditing ? (
                      <>
                      <div className="flex sm:flex-col items-center sm:items-start gap-2">
                        <input
                          type="text"
                          value={editedEmail}
                          onChange={(e) => setEditedEmail(e.target.value)}
                          className="border rounded px-2 py-1"
                        />
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
                          <button
                            onClick={handleSaveEmail}
                            className="text-white"
                          >
                            Save
                          </button>
                        </div>
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
                          <button
                            onClick={handleCancelEmail}
                            className="text-gray-900"
                          >
                            Cancel
                          </button>
                        </div>
                        </div>
                        </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Typography variant="body" color="gray">
                          {userInformation.email_id}
                        </Typography>
                        <div className="flex-grow md:flex-grow"></div>
                        
                          <button
                            onClick={handleEditEmail}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                        
                      </>
                    )}
                </div>
                <hr className="my-2 hr-light" style={{ width: "170%" }} />
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray"  className="sm:text-left">
                  Mobile
                </Typography>
                <div className="flex sm:flex-row items-center gap-2">
                {isMobileEditing ? (
                      <>
                      <div className="flex sm:flex-col items-center sm:items-start gap-2">
                        <input
                          type="number"
                          value={editedMobile}
                          onChange={(e) => setEditedMobile(e.target.value)}
                          className="border rounded px-2 py-1"
                        />
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
                          <button
                            onClick={handleSaveMobile}
                            className="text-white"
                          >
                            Save
                          </button>
                        </div>
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
                          <button
                            onClick={handleCancelMobile}
                            className="text-gray-900"
                          >
                            Cancel
                          </button>
                        </div>
                        </div>
                        </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Typography variant="body" color="gray">
                          {userInformation.mobile_number}
                        </Typography>
                        <div className="flex-grow"></div>
                        
                          <button
                            onClick={handleEditMobile}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                        
                      </>
                    )}
                </div>
                <hr className="my-2 hr-light" style={{ width: "170%" }} />
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray"  className="sm:text-left">
                  Emergency contact
                </Typography>
                <div className="flex sm:flex-row items-center gap-2">
                {isEmergencyEditing ? (
                      <>
                      <div className="flex sm:flex-col items-center sm:items-start gap-2">
                        <input
                          type="number"
                          value={editedEmergency}
                          onChange={(e) => setEditedEmergency(e.target.value)}
                          className="border rounded px-2 py-1"
                        />
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
                          <button
                            onClick={handleSaveEmergency}
                            className="text-white"
                          >
                            Save
                          </button>
                        </div>
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
                          <button
                            onClick={handleCancelEmergency}
                            className="text-gray-900"
                          >
                            Cancel
                          </button>
                        </div>
                        </div>
                        </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Typography variant="body" color="gray">
                          {userInformation.emergency_contact}
                        </Typography>
                        <div className="flex-grow"></div>
                        
                          <button
                            onClick={handleEditEmergency}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                        
                      </>
                    )}
                </div>
                <hr className="my-2 hr-light" style={{ width: "170%" }} />
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray"  className="sm:text-left">
                  Date of Birth
                </Typography>
                <div className="flex sm:flex-row items-center gap-2">
                {isDOBEditing ? (
                      <>
                      <div className="flex sm:flex-col items-center sm:items-start gap-2">
                        <DatePicker
                          selected={editedDOB}
                          onChange={(date) => setEditedDOB(date)}
                          showYearDropdown
                          scrollableYearDropdown
                          yearDropdownItemNumber={70}
                          yearDropdownMin={1950}
                          className="border rounded px-2 py-1"
                        />
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
                          <button
                            onClick={handleSaveDOB}
                            className="text-white"
                          >
                            Save
                          </button>
                        </div>
                        <div className="flex sm:flex-row gap-2">
                        <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
                          <button
                            onClick={handleCancelDOB}
                            className="text-gray-900"
                          >
                            Cancel
                          </button>
                        </div>
                        </div>
                        </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <Typography variant="body" color="gray">
                          {editedDOB.toDateString()}
                        </Typography>
                        <div className="flex-grow"></div>
                       
                          <button
                            onClick={handleEditDOB}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            Edit
                          </button>
                        
                      </>
                    )}
                </div>
                <hr className="my-2 hr-light" style={{ width: "170%" }} />
              </div>
              <div className="mb-8">
  <Typography variant="h6" color="blue-gray" className="sm:text-left">
    Gender
  </Typography>
  <div className="flex sm:flex-row items-center gap-2">
    {isGenderEditing ? (
      <>
       <div className="flex sm:flex-col items-center sm:items-start gap-2">
        <select
          value={editedGender}
          onChange={(e) => setEditedGender(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="flex sm:flex-row gap-2">
          <div className="rounded-lg border border-blue-500 px-4 bg-blue-400">
            <button onClick={handleSaveGender} className="text-white">
              Save
            </button>
          </div>
          <div className="flex sm:flex-row gap-2">
            <div className="rounded-lg border border-blue-500 px-4 bg-blue-50">
              <button
                onClick={handleCancelGender}
                className="text-gray-900"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        </div>
      </>
    ) : (
      <>
        <Typography variant="body" color="gray">
          {userInformation.gender}
        </Typography>
        <div className="flex-grow"></div>
        <button
          onClick={handleEditGender}
          className="text-blue-500 hover:text-blue-700"
        >
          Edit
        </button>
      </>
    )}
  </div>
  <hr className="my-2 hr-light" style={{ width: "170%" }} />
</div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray"  className="sm:text-left">
                  Created at
                </Typography>
                <Typography variant="body" color="gray"  className="sm:text-left">
                  {userInformation.createdAt}
                </Typography>
              </div>
            </div>
          </div>
          </Card>
        </div>
      </div>
    </div>
  );
}