import React, { useState } from "react";
import foodavi from "images/food.jpg";
import CartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import HomeIcon from "@heroicons/react/outline/HomeIcon";
import InfoIcon from "@heroicons/react/outline/InformationCircleIcon";
import Cart from "../Cart";
import ServerIcon from "@heroicons/react/outline/ServerIcon";
import { Link } from "react-router-dom";
import { DashPages, GotoLink } from "router";
import Menu from "components/Menu";

const foodItems = [
  {
    id: 1,
    imgUrl: foodavi,
    item: "Amala",
    price: 50,
    city: "Lagos",
  },
  { id: 2, imgUrl: foodavi, item: "Rice", price: 70, city: "Abuja" },
  { id: 3, imgUrl: foodavi, item: "Iyan", price: 100, city: "Lagos" },
  { id: 4, imgUrl: foodavi, item: "Fufu", price: 200, city: "Kano" },
  { id: 5, imgUrl: foodavi, item: "Ogufe", price: 400, city: "Lagos" },
  { id: 6, imgUrl: foodavi, item: "Beans", price: 400, city: "Ibadan" },
];

const menu = [
  {
    title: "Restaurant",
    icon: HomeIcon,
    to: "/dashboard/restaurants",
    activeOnlyWhenExact: true,
  },
  { title: "Food", icon: ServerIcon, to: "/dashboard/food" },
  { title: "About", icon: InfoIcon, to: "/dashboard/about" },
];

const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(true);
  const [cart, setCart] = useState([]);

  function onSearchChange(e) {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  function onCartOpenClick() {
    setOpen(!open);
  }

  function addToCart(item) {
    const updatedCart = cart;
    const updatedItemIndex = updatedCart.findIndex(
      (itemInCart) => itemInCart.id === item.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...item, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setCart(() => [...updatedCart]);
  }

  return (
    // <div className="container mx-auto">
    <div className="grid grid-cols-12 grid-rows-2 h-screen">
      <div className="flex justify-center py-6 items-center bg-white border-b border-solid border-gray-200 sm:col-start-3 col-start-1 col-end-13 row-start-1 h-12 sticky z-50">
        <form className="ml-auto relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:border-green-500 focus:ring-1 focus:ring-green-300 ring-1 ring-gray-300 md:w-96 text-base outline-none text-black py-1 rounded-md pl-10 placeholder-gray-500"
            placeholder="Search city"
            onChange={onSearchChange}
          />
        </form>
        <div
          onClick={onCartOpenClick}
          className="ml-auto relative cursor-pointer"
        >
          <CartIcon className=" w-8 h-8 ml-auto"></CartIcon>
          {cart.length > 0 && (
            <span className="absolute top-4 right-5 text-white rounded-full bg-red-600 flex items-center justify-center h-6 w-6">
              {cart.length}
            </span>
          )}
        </div>
        <img className="rounded-full h-8 w-8 mr-3 ml-3" src={foodavi} alt="" />
      </div>
      <div className="relative sm:col-start-3 col-start-1 col-end-13 row-start-1 pt-16 overflow-scroll min-h-screen">
        {/* <Cart open={open} cartItems={cart} /> */}
        {/* <Menu
          foodItems={foodItems}
          addToCart={addToCart}
          searchTerm={searchTerm}
        /> */}
        <DashPages />
      </div>
      <div className="row-start-1 col-span-2 bg-green-600 min-h-screen sm:block hidden py-3 px-2">
        <div className="flex justify-start items-center mb-6">
          <img
            className="h-10 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <h1 className="inline text-3xl text-white font-semibold ml-2">
            easywire
          </h1>
        </div>
        <ul className="text-white text-left">
          {menu.map((item, key) => {
            return (
              <GotoLink key={key} link={item} />
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
      </div>
    </div>
    // </div>
  );
};

export default Food;
