import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon";
import React, { useState } from "react";

const Cart = ({ open, cartItems }) => {
  return (
    <div
      hidden={open}
      className="absolute top-14 right-5 w-72 p-5 rounded-md z-30 bg-red-300 mt-2"
    >
      <ul>
        {cartItems.map((item) => (
          <>
            <li>{item.item}</li>
            <li>{item.price}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
