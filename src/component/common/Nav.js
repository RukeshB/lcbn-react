import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  UserPlusIcon,
  UserGroupIcon,
  PhoneIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BN_Leo_logo from "../../assets/image/logos/namaste leo club copy.png";

// nav list component
const navListItems = [
  {
    label: "BOD",
    icon: UserGroupIcon,
    path: "/bod",
  },
  {
    label: "About",
    icon: UserCircleIcon,
    path: "/about",
  },
  {
    label: "Join Us",
    icon: UserPlusIcon,
    path: "/join",
  },
  {
    label: "Contact",
    icon: PhoneIcon,
    path: "/contact",
  },
];

function NavList() {
  return (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, path }, key) => (
        <Link to={path} className="font-normal" key={key}>
          <Typography
          key={label}
          variant="small"
          color="blue-gray">
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
        </Typography>
        </Link>
      ))}
    </ul>
  );
}

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="max-w-screen-xl absolute z-50 left-1/2 transform -translate-x-1/2 fixed">
      <div className="relative flex items-center mx-auto text-blue-gray-900">
        <Link className="cursor-pointer -my-2" to={"/"}>
          
        <Avatar
            variant="circular"
            size="md"
            alt="BNLC"
            src={BN_Leo_logo}
          />
        </Link>
        <div className="absolute hidden top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="w-6 h-6" />
        </IconButton>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
