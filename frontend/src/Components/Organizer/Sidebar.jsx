import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, toggleSidebar } from "../../redux/SidebarSlice";
import {
  Card,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip, 
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  CalendarIcon,
  UsersIcon,
  FolderIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
// import { ChevronRightIcon, XIcon } from '@heroicons/react/outline';

const sidebarItems = [
  {
    linkTo: "dashboard",
    icon: PresentationChartBarIcon,
    label: "Dashboard",
    hasSuffix: false,
  },
  {
    linkTo: "calendar",
    icon: CalendarIcon,
    label: "Calendar",
    hasSuffix: false,
  },
  {
    linkTo: "tournament-tracking",
    icon: FolderIcon,
    label: "Tournament Tracking",
    hasSuffix: false,
  },
  {
    linkTo: "teams",
    icon: UsersIcon,
    label: "Teams",
    hasSuffix: false,
  },
  {
    linkTo: "messages",
    icon: InboxIcon,
    label: "Messages",
    hasSuffix: true,
  },
];

// eslint-disable-next-line react/prop-types
function SidebarItems (){
  const dispatch = useDispatch();
  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  return (
    <>
    <Card
        className={`bg-white shadow-xl md:shadow-none h-screen mt-4`}
      > 
        {sidebarItems.map((item, key) => (
          <>
            <Link key={key} to={item.linkTo}>
              <ListItem onClick={handleCloseSidebar}
                className={`pl-6 w-full rounded-none py-4 focus:bg-orange-50 focus:text-orange-500 hover:bg-orange-50 hover:text-orange-500 `}
              >
                <ListItemPrefix>
                  <item.icon className="h-5 w-5" />
                </ListItemPrefix>
                <p>{item.label}</p>
                {item.hasSuffix && (
                  <ListItemSuffix >
                    <Chip
                        value="14"
                        size="sm"
                        variant="ghost"
                        color="orange"
                        className={`${!open && "scale-0"} rounded-full`}
                      />
                  </ListItemSuffix>
                )}
              </ListItem>
            </Link>
          </>
        ))}
      </Card>
      </>
  )
}

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
      <div
        className={`${
          isOpen ? "w-80 fixed top-0 md:block" : "hidden md:sticky"
        } w-80 md:inline-block md:top-0 bg-white border-r-2`}
      >
        {/* Content div starts */}
        <div className="md:hidden relative p-4 ">
          <AiOutlineClose className="absolute top-5 right-9" onClick={handleToggleSidebar} />
        </div>
        <div className="w-full pt-4 md:pt-0 ">
          <SidebarItems />
        </div>
        {/* Content div ends */}
      </div>
    </>
  );
};

export default Sidebar;
