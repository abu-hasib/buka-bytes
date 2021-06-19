import React from "react";
import { isSearched } from "../global";

const Menu = ({ foodItems, addToCart, searchTerm }) => {
  //   console.log(foodavi);
  return (
    <div className="transition duration-500 ease-in-out flex flex-wrap justify-evenly">
      {foodItems.filter(isSearched(searchTerm)).map((item, key) => {
        return (
          <div
            key={key}
            className="flex flex-col md:flex-row p-5 rounded-lg shadow-lg mb-10"
          >
            <div className="flex w-72 md:w-44 mb-7">
              <img
                src={item.imgUrl}
                alt=""
                className="inset-0 w-full h-full object-cover object-center rounded-lg mx-auto"
              />
            </div>
            <form className="flex-auto pl-0 md:pl-4">
              <div className="flex flex-wrap items-baseline">
                <h1 className="w-full flex-none font-semibold text-xl text-left mb-2.5">
                  {item.item}
                </h1>
                <div className="text-4xl leading-7 font-bold text-green-500">
                  ₦{item.price}
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
                    className="w-2/3 flex items-center justify-center rounded-full bg-green-500 text-white"
                    type="submit"
                    onClick={() => addToCart(item)}
                  >
                    Buy now
                  </button>
                  <button
                    className="w-9/12 flex items-center justify-center rounded-full bg-purple-50 text-green-500"
                    type="button"
                    onClick={() => addToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
                <button
                  className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-green-500"
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
  );
};

export default Menu;
