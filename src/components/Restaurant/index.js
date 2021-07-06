import React from "react";
import foodavi from "images/food.jpg";

const restaurants = [
  { name: "Luifi Chang", type: "Chinese", img: foodavi },
  { name: "Akobo Canteen", type: "Continental", img: foodavi },
  { name: "Igbalode", type: "African", img: foodavi },
  { name: "Fingers 'n' Fork", type: "Cuisine de francais", img: foodavi },
  { name: "The Place", type: "Local & Lounge", img: foodavi },
  { name: "Sweetners & more", type: "Continental", img: foodavi },
  { name: "Wang Lo", type: "Chinese", img: foodavi },
  { name: "Akwa Cross", type: "African", img: foodavi },
];

const Restaurant = () => {
  return (
    <div className="animate-bounceIn container mx-auto pb-10">
      <div className="flex flex-wrap justify-evenly lg:gap-x-2 gap-y-10 lg:px-2">
        {restaurants.map((restaurant) => {
          return (
            <div className="grid pb-10 grid-cols-1 shadow-md rounded-lg w-11/12 md:w-auto">
              <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black">
                <p className="text-sm font-medium text-white sm:mb-1">
                  {restaurant.type}
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-xl sm:leading-7">
                  {restaurant.name}
                </h2>
              </div>
              <div className="col-start-1 row-start-2 px-4 sm:pb-3">
                <div className="flex items-center text-sm font-normal my-5 sm:mt-2 sm:mb-4">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-green-600"
                  >
                    <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
                  </svg>
                  <div className="ml-1">
                    <span className="text-black pr-1">4.94</span>
                    <span className="sm:hidden md:inline text-gray-400">
                      (128)
                    </span>
                  </div>
                  <div className="text-base text-gray-400 font-normal mx-2">
                    ·
                  </div>
                  <div className="text-gray-400">Collingwood, Ontario</div>
                </div>
                <hr className="w-16 border-gray-300 hidden" />
              </div>
              <div className="col-start-1 row-start-3 space-y-3 px-4">
                <p className="flex items-center text-black text-sm font-medium">
                  <img
                    src={foodavi}
                    alt=""
                    className="w-6 h-6 rounded-full mr-2 bg-gray-100"
                  />
                  Hosted by Yakoyo
                </p>
                <button
                  type="button"
                  className="flex bg-green-100 text-green-700 text-base font-semibold px-6 py-2 rounded-lg"
                >
                  Check availability
                </button>
              </div>

              <div className="col-start-1 row-start-1 flex">
                <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
                  <div className="relative col-span-3 row-span-2">
                    <img
                      src={foodavi}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restaurant;
