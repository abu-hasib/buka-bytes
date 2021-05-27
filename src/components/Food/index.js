import React from "react";
import foodavi from "../../images/food.jpg";

const foodItems = [
  { imgUrl: foodavi, item: "Amala", price: "#50" },
  { imgUrl: foodavi, item: "Rice", price: "#70" },
  { imgUrl: foodavi, item: "Iyan", price: "#100" },
  { imgUrl: foodavi, item: "Fufu", price: "#200" },
  { imgUrl: foodavi, item: "Ogufe", price: "#400" },
  { imgUrl: foodavi, item: "Beans", price: "#400" },
];

const Food = () => {
  return (
    // <div className="container mx-auto">
    <div className="grid grid-cols-12 grid-rows-2 h-screen">
      <div className="bg-red-900 col-start-3 col-end-13 row-start-1 h-12 sticky z-50"></div>
      <div className="col-start-3 col-end-13 row-start-1 pt-16 overflow-scroll min-h-screen">
        <div className="flex flex-wrap justify-evenly">
          {foodItems.map((item, key) => {
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

export default Food;
