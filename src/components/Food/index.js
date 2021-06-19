import React, { useState } from "react";
import foodavi from "images/food.jpg";
import CartIcon from "@heroicons/react/outline/ShoppingCartIcon";

import Main from "components/Main";
import { foodItems } from "../global";
import Sidebar from "components/Sidebar";
import Cart from "components/Cart";

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
      <Cart open={open} cartItems={cart} />
      <Main
        foodItems={foodItems}
        addToCart={addToCart}
        searchTerm={searchTerm}
      />
      <Sidebar />
    </div>
    // </div>
  );
};

export default Food;
