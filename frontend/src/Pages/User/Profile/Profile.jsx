
// import { Link } from "react-router-dom";
// import { useAppSelector } from "../../../redux/store";

// export default function PlayerProfile() {
//   const user = useAppSelector((state) => state.userState.user) || "";
//   // console.log(user)
//   const welcome = user ? `Welcome ${user?.name}!` : 'welcome!'

//   const content = (
//       <section className="welcome">
//           <h1>{welcome}</h1>
//           <p className=" text-blue-gray-700 underline hover:text-blue-400">
//             Common Profile Page
//           </p>
//       </section>
//   )

//   return (
//     <>
//       <h1>Hello</h1>
//       {
//         user && 
//         <>
//         <div className="flex justify-center items-center flex-col">
//           <p>Name: {user?.name}</p>
//           <Link className="text-sm text-blue-700 underline" to={'/player/docs'}>upload documents</Link>
//         </div>
//         </>
//       }
//     </>
//   )
// }


import React, {useState} from "react";
// import logo from './logo.png'; 
// import user from './user.avif'
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

 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];
 
function NavListMenu() {
  
 
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
           <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
               Home{" "}
           </MenuItem>
           <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
             {renderItems}
           </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Us",
    icon: UserCircleIcon,
  },
  {
    label: "Features",
    icon: CubeTransparentIcon,
  },
  {
    label: "Blogs",
    icon: CodeBracketSquareIcon,
  },
];
 
function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {/* {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "} */}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

function generateUniqueTag() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let tag = "";
  for (let i = 0; i < 6; i++) {
    tag += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return tag;
}
 
export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const uniqueTag = generateUniqueTag();

  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  

  

  const userInformation = {
    mobile_number: "8123402",
    name: "om",
    verified: true,
    createdAt: "2023-07-15T05:53:48",
    email_id: "om@gmail.com",
    emergency_contact: "null",
    dob: "2023-07-15",
  };

  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleEdit = (field) => {
    if (field === "dob") {
      setEditMode("dob");
    } else {
      setEditValue(userInformation[field]);
      setEditMode(field);
    }
  };

  const handleFinalize = (field) => {
    if (field === "dob") {
      setUserInformation((prev) => ({ ...prev, dob: selectedDate }));
    } else {
      setUserInformation((prev) => ({ ...prev, [field]: editValue }));
    }
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  return (
    <div className="w-full h-full">
    

      <div className="flex flex-col h-full lg:flex-row">
      <Card className=" w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border-2 h-full sticky top-48">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className='text-3xl'>
          Account Settings
        </Typography>
      </div>
      <List>
        <ListItem className='mb-5 hover:bg-orange-200'>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Personal info
        </ListItem>
        <ListItem className='mb-5 hover:bg-orange-200'>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Update payment details
        </ListItem>
        <ListItem className='mb-5 hover:bg-orange-200'>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Security setting
          
        </ListItem>
        <ListItem className='mb-5 hover:bg-orange-200'>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Permissions
        </ListItem>
        <ListItem className='mb-5 hover:bg-orange-200'>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Email notifications
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        
      </List>
    </Card>

    <div className="flex-col w-full lg:ml-32 max-w-[80rem] p-8 flex">
    <div className="profile-image relative">
    <Avatar
            variant="circular"
            size="xl"
            alt="User Profile"
            src={"../../../assets/images/google.png"}
            className="mx-auto ml-16 mt-16"
            
          />
          
          </div>

          

          <div className="ml-16 mt-24 mr-80">
            <div className='w-40'>
          <div className="rounded-full bg-blue-50 text-blue-400 font-bold px-8">
              {uniqueTag}
            </div>
            </div>
            <div className="text-left mt-16">
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Full Name
                   {editMode === "name" ? (
                    <div>
                      <input
                        type="text"
                        className="border rounded px-2 ml-2"
                        value={editValue}
                        onChange={handleInputChange}
                      />
                      <span
                        className="text-blue-500 cursor-pointer ml-2"
                        onClick={() => handleFinalize("name")}
                      >
                        &#10004;
                      </span>
                    </div>
                  ) : (
                    <div className="ml-80">
                      <span
                      className="text-gray-500 ml-80 cursor-pointer"
                      onClick={() => handleEdit("name")}
                    >
                      Edit
                    </span>
                    </div>
                  )}
                </Typography>
                <div className="flex items-center gap-2">
                  {editMode === "name" ? (
                    null
                  ) : (
                    <Typography variant="body" color="gray">
                      {userInformation.name}
                    </Typography>
                  )}
                 
                </div>
                
                <hr className="my-2 hr-style"/>
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Email
                  {editMode === "email_id" ? (
                    <div>
                      <input
                        type="text"
                        className="border rounded px-2 ml-2"
                        value={editValue}
                        onChange={handleInputChange}
                      />
                      <span
                        className="text-blue-500 cursor-pointer ml-2"
                        onClick={() => handleFinalize("email_id")}
                      >
                        &#10004;
                      </span>
                    </div>
                  ) : (
                    <div className="ml-80">
                      <span
                      className="text-gray-500 w-full cursor-pointer ml-80"
                      onClick={() => handleEdit("email_id")}
                    >
                      Edit
                    </span>
                    </div>
                  )}
                </Typography>
                <div className="flex items-center gap-2">
                  {editMode === "email_id" ? (
                    null
                  ) : (
                    <Typography variant="body" color="gray">
                      {userInformation.email_id}
                    </Typography>
                  )}
                 
                </div>
                <hr className="my-2 hr-style"/>
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Mobile
                  {editMode === "mobile_number" ? (
                    <div>
                      <input
                        type="text"
                        className="border rounded px-2 ml-2"
                        value={editValue}
                        onChange={handleInputChange}
                      />
                      <span
                        className="text-blue-500 cursor-pointer ml-2"
                        onClick={() => handleFinalize("mobile_number")}
                      >
                        &#10004;
                      </span>
                    </div>
                  ) : (
                    <div className="ml-80">
                      <span
                      className="text-gray-500 ml-80 cursor-pointer"
                      onClick={() => handleEdit("mobile_number")}
                    >
                      Edit
                    </span>
                    </div>
                  )}
                </Typography>
                <div className="flex items-center gap-2">
                  {editMode === "mobile_number" ? (
                    null
                  ) : (
                    <Typography variant="body" color="gray">
                      {userInformation.mobile_number}
                    </Typography>
                  )}
                 
                </div>
                <hr className="my-2 hr-style"/>
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Emergency contact
                  {editMode === "emergency_contact" ? (
                    <div>
                      <input
                        type="text"
                        className="border rounded px-2 ml-2"
                        value={editValue}
                        onChange={handleInputChange}
                      />
                      <span
                        className="text-blue-500 cursor-pointer ml-2"
                        onClick={() => handleFinalize("emergency_contact")}
                      >
                        &#10004;
                      </span>
                    </div>
                  ) : (
                    <div className="ml-80">
                      <span
                      className="text-gray-500 ml-80 cursor-pointer"
                      onClick={() => handleEdit("emergency_contact")}
                    >
                      Edit
                    </span>
                    </div>
                  )}
                </Typography>
               <div className="flex items-center gap-2">
                  {editMode === "emergency_contact" ? (
                    null
                  ) : (
                    <Typography variant="body" color="gray">
                      {userInformation.emergency_contact}
                    </Typography>
                  )}
                 
                </div>
                <hr className="my-2 hr-style"/>
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Date of Birth
                  {editMode === "dob" ? (
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="border rounded px-2 ml-2"
              dateFormat="yyyy-MM-dd"
            />
            <span
              className="text-blue-500 cursor-pointer ml-2"
              onClick={() => handleFinalize("dob")}
            >
              &#10004;
            </span>
          </div>
        ) : (
          <div className="ml-80"><span
            className="text-gray-500 ml-80 cursor-pointer"
            onClick={() => handleEdit("dob")}
          >
            Edit
          </span>
          </div>
        )}
                </Typography>
                <div className="flex items-center gap-2">
        {editMode === "dob" ? (
          null
        ) : (
          <Typography variant="body" color="gray">
            {userInformation.dob}
          </Typography>
        )}
      </div>
                <hr className="my-2 hr-style"/>
              </div>
              <div className="mb-8">
                <Typography variant="h6" color="blue-gray">
                  Created at
                </Typography>
                <Typography variant="body" color="gray">
                  {userInformation.createdAt}
                </Typography>
              </div>
            </div>

            </div>
        </div>

    </div> 
    </div>
    

  );
  
}