import React from "react";
import { usePaystackPayment } from "react-paystack";

const Pay = ({ amount, email, disabled }) => {
  console.log(disabled);
  const config = {
    reference: new Date().getTime(),
    email: email || "example@mail.com",
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PK,
  };

  const intializePay = usePaystackPayment(config);

  return (
    <div>
      <button
        type="button"
        className="bg-green-100 text-green-600 text-base font-semibold px-6 py-2 rounded-lg disabled:opacity-50"
        onClick={() => {
          intializePay(onSuccess, onClose);
        }}
        disabled={disabled}
      >
        Checkout
      </button>
    </div>
  );
};

const onSuccess = (reference) => {
  console.log(reference);
};

const onClose = () => {
  console.log("closed");
};

export default Pay;
