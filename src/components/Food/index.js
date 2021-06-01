import React, { useState } from "react";
import foodavi from "../../images/food.jpg";
import CartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import Cart from "../Cart";

const foodItems = [
  { id: 1, imgUrl: foodavi, item: "Amala", price: "₦50", city: "Lagos" },
  { id: 2, imgUrl: foodavi, item: "Rice", price: "₦70", city: "Abuja" },
  { id: 3, imgUrl: foodavi, item: "Iyan", price: "₦100", city: "Lagos" },
  { id: 4, imgUrl: foodavi, item: "Fufu", price: "₦200", city: "Kano" },
  { id: 5, imgUrl: foodavi, item: "Ogufe", price: "₦400", city: "Lagos" },
  { id: 6, imgUrl: foodavi, item: "Beans", price: "₦400", city: "Ibadan" },
];

const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
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
      <div className="flex justify-center items-center bg-green-300 sm:col-start-3 col-start-1 col-end-13 row-start-1 h-12 sticky z-50">
        <input
          className="md:w-96 h-8 rounded-2xl outline-none p-4 ml-auto"
          placeholder="Search city"
          onChange={onSearchChange}
        />
        <div onClick={onCartOpenClick} className="ml-auto relative">
          <CartIcon className=" w-8 h-8 ml-auto relative"></CartIcon>
          {foodItems.length > 1 && (
            <span className="absolute top-5 right-0.5 text-white rounded-full bg-red-700 p-1 h-8 w-8">
              {foodItems.length}
            </span>
          )}
        </div>
        <img className="rounded-full h-8 w-8 mr-3 ml-3" src={foodavi} alt="" />
      </div>
      <div className="relative sm:col-start-3 col-start-1 col-end-13 row-start-1 pt-16 overflow-scroll min-h-screen">
        <Cart open={open} cartItems={cart} />
        <div className="flex flex-wrap justify-evenly">
          {foodItems.filter(isSearched(searchTerm)).map((item, key) => {
            return (
              <div
                key={key}
                className="flex flex-col md:flex-row p-5 rounded-lg shadow-lg mb-10"
              >
                <div className="flex w-72 md:w-44 mb-7">
                  <img
                    src={foodavi}
                    alt=""
                    className="inset-0 w-full h-full object-cover object-center rounded-lg mx-auto"
                  />
                </div>
                <form className="flex-auto pl-0 md:pl-4">
                  <div className="flex flex-wrap items-baseline">
                    <h1 className="w-full flex-none font-semibold text-xl text-left mb-2.5">
                      {item.item}
                    </h1>
                    <div className="text-4xl leading-7 font-bold text-purple-600">
                      {item.price}
                    </div>
                    <div className="text-sm font-medium text-gray-400 ml-3">
                      In stock
                    </div>
                  </div>
                  <div className="flex items-baseline my-8">
                    <div className="space-x-2 flex text-sm font-medium">
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white"
                          name="size"
                          type="radio"
                          value="xs"
                          // checked
                        />
                        XS
                      </label>
                      <label>
                        <input
                          className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200"
                          name="size"
                          type="radio"
                          value="s"
                        />
                        S
                      </label>
                    </div>
                    {/* <div className="ml-3 text-sm text-gray-500 underline">
                    Size Guide
                  </div> */}
                  </div>
                  <div className="flex space-x-1 mb-4 text-sm font-semibold">
                    <div className="flex-auto flex space-x-3">
                      <button
                        className="w-2/3 flex items-center justify-center rounded-full bg-purple-700 text-white"
                        type="submit"
                      >
                        Buy now
                      </button>
                      <button
                        className="w-9/12 flex items-center justify-center rounded-full bg-purple-50 text-purple-700"
                        type="button"
                        onClick={() => addToCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                    <button
                      className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700"
                      type="button"
                      aria-label="like"
                    >
                      <svg width="20" height="20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Free delivery on all local orders.
                  </p>
                </form>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-red-400 row-start-1 col-span-2 min-h-screen sm:block hidden"></div>
    </div>
    // </div>
  );
};

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.city.toLowerCase().includes(searchTerm.toLowerCase());

export default Food;
