import React from "react";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import InfoIcon from "@heroicons/react/outline/InformationCircleIcon";
import ServerIcon from "@heroicons/react/outline/ServerIcon";
import { GotoLink } from "router";
import { Link } from "react-router-dom";

const menu = [
  { title: "Food", icon: ServerIcon, to: "/dashboard/food" },
  {
    title: "Restaurant",
    icon: HomeIcon,
    to: "/dashboard/restaurants",
    activeOnlyWhenExact: true,
  },
  { title: "About", icon: InfoIcon, to: "/dashboard/about" },
];

const Sidebar = ({ sideOpen, toggleSidebar, mobile }) => {
  return (
    <div
      className={
        (sideOpen ? "z-50 shadow-xl translate-x-5 col-span-7 " : "hidden ") +
        "row-start-1 col-start-1 lg:col-end-3 bg-green-600 min-h-screen py-3 px-2 transition duration-500 xl:block ease-in-out"
      }
    >
      <Link to="/" className="flex justify-start items-center mb-6">
        <img
          className="h-10 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
        <h1 className="inline text-3xl text-white font-semibold ml-2">
          yakoyo
        </h1>
      </Link>
      <ul className="text-white text-left">
        {menu.map((item, key) => {
          return (
            <GotoLink key={key} link={item} toggleSidebar={toggleSidebar} />
            // <li
            //   key={key}
            //   className="font-normal py-2 px-2 my-3 rounded-md w-full bg-gray-700 bg-opacity-20"
            // >
            //   <Link to="/">
            //     {<item.icon className="h-6 w-6 inline" />}
            //     {/* <a href="" className="pl-3 text-base"> */}
            //     {item.title}
            //     {/* </a> */}
            //   </Link>
            // </li>
          );
        })}
      </ul>
      <div></div>
    </div>
  );
};

export default Sidebar;
