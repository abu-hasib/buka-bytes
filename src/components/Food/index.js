import React, { useState } from "react";
import foodavi from "../../images/food.jpg";

const foodItems = [
  { imgUrl: foodavi, item: "Amala", price: "#50", city: "Lagos" },
  { imgUrl: foodavi, item: "Rice", price: "#70", city: "Abuja" },
  { imgUrl: foodavi, item: "Iyan", price: "#100", city: "Lagos" },
  { imgUrl: foodavi, item: "Fufu", price: "#200", city: "Kano" },
  { imgUrl: foodavi, item: "Ogufe", price: "#400", city: "Lagos" },
  { imgUrl: foodavi, item: "Beans", price: "#400", city: "Ibadan" },
];

const Food = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchChange(e) {
    // console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  return (
    // <div className="container mx-auto">
    <div className="grid grid-cols-12 grid-rows-2 h-screen">
      <div className="flex justify-around items-center bg-green-300 col-start-3 col-end-13 row-start-1 h-12 sticky z-50">
        <input
          className="w-96 h-8 rounded-2xl outline-none p-4 ml-auto"
          placeholder="Search city"
          onChange={onSearchChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <img className="rounded-full h-8 w-8 mr-3 ml-3" src={foodavi} />
      </div>
      <div className="col-start-3 col-end-13 row-start-1 pt-16 overflow-scroll min-h-screen">
        <div className="flex flex-wrap justify-evenly">
          {foodItems.filter(isSearched(searchTerm)).map((item, key) => {
            return (
              <div
                key={key}
                className="flex flex-col md:flex-row w-auto p-6 rounded-lg shadow-lg mb-10"
              >
                <div className="flex-none w-60 md:w-44 relative mb-7">
                  <img
                    src={foodavi}
                    alt=""
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </div>
                <form className="flex-auto pl-6 items-start">
                  <div className="flex flex-wrap items-baseline">
                    <h1 className="w-full flex-none font-semibold text-xl md:text-2xl mb-2.5">
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
                  <div className="flex space-x-3 mb-4 text-sm font-semibold">
                    <div className="flex-auto flex space-x-3">
                      <button
                        className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white"
                        type="submit"
                      >
                        Buy now
                      </button>
                      <button
                        className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700"
                        type="button"
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
                    Free shipping on all local orders.
                  </p>
                </form>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-red-400 row-start-1 col-span-2 min-h-screen"></div>
    </div>
    // </div>
  );
};

const isSearched = (searchTerm) => (item) =>
  !searchTerm || item.city.toLowerCase().includes(searchTerm.toLowerCase());

export default Food;
