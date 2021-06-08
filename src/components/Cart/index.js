import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import Pay from "components/Pay";
import React, { useState, useEffect } from "react";

const Cart = ({ open, cartItems }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(handleTotal(cartItems));
  }, [cartItems]);

  return (
    <div
      hidden={open}
      className="fixed top-14 right-10 w-72 p-7 rounded-md z-30 bg-white shadow-2xl mt-2 divide-gray-700"
    >
      <div className="flex justify-between items-center mb-8 pb-4 border-b">
        <div className="inline-flex">
          <ShoppingCartIcon className="w-5 h-5" />
          <span className="h-5 w-5 rounded-full flex items-center justify-center bg-green-500 text-white">
            {cartItems.length}
          </span>
        </div>
        <p className="">
          Total:{" "}
          <span className="font-light text-green-300">
            {/* <Total cart={cartItems}></Total> */}
            {formatCurrency(handleTotal(cartItems))}
          </span>
        </p>
      </div>
      <ul className="">
        {cartItems.map((item, index) => (
          <li key={index} className="grid grid-cols-3 mb-6">
            <img
              src={item.imgUrl}
              alt={item.imgUrl}
              className="w-14 h-14 col-start-1 row-start-1"
            />
            <div className="col-span-2 justify-self-start font-light">
              <p className="text-lg text-left">{item.item}</p>
              <span className="text-green-400 mr-4">{item.price}</span>
              <span className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {/* <button
        type="button"
        className="bg-green-100 text-green-600 text-base font-semibold px-6 py-2 rounded-lg"
      >
        Checkout
      </button> */}
      <Pay amount={total} />
    </div>
  );
};

const handleTotal = (cart) =>
  cart.reduce((acc, curr, index, cart) => {
    // console.log(`prev: ${acc} + curr: ${curr.price}`);
    return acc + curr.price * curr.quantity;
  }, 0);

const formatCurrency = (number) => {
  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return formatter.format(number);
};

export default Cart;
