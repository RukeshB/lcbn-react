import React, { useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  PhoneIcon,
  Bars2Icon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// nav list component
const navListItems = [
  {
    label: "BOD",
    icon: DocumentIcon,
    path: "/bod",
  },
  {
    label: "About",
    icon: UserCircleIcon,
    path: "/",
  },
  {
    label: "Join Us",
    icon: PhoneIcon,
    path: "/",
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
        <Link className="mr-4 ml-2 cursor-pointer py-1.5 font-medium" to={"/"}>
          
          <Typography>
            BNLC
          </Typography>
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
