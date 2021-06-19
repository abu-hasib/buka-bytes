import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import Pay from "components/Pay";
import React, { useState, useEffect } from "react";
import { formatCurrency } from "../global";

const Cart = ({ open, cartItems }) => {
  const [total, setTotal] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTotal(handleTotal(cartItems));
  }, [cartItems]);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

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
          <span className="font-normal text-green-500">
            {/* <Total cart={cartItems}></Total> */}
            {formatCurrency(total)}
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
            <div className="col-span-2 justify-self-start font-normal">
              <p className="text-lg text-left">{item.item}</p>
              <span className="text-green-500 mr-4">{item.price}</span>
              <span className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <input
        placeholder="enter email for receipt"
        className="w-56 h-5 outline-none rounded-md p-4 mb-5 ring-1 ring-gray-400 focus:ring-green-500"
        onChange={handleOnChange}
        defaultValue={email}
      />
      <Pay amount={total} email={email} disabled={total <= 0} />
    </div>
  );
};

const handleTotal = (cart) =>
  cart.reduce((acc, curr, index, cart) => {
    // console.log(`prev: ${acc} + curr: ${curr.price}`);
    return acc + curr.price * curr.quantity;
  }, 0);

export default Cart;
