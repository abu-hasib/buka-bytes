import Menu from "components/Menu";
import Restaurant from "components/Restaurant";
import React from "react";
import { Switch, Route } from "react-router-dom";
import {} from "@heroicons/react/outline/";
import "./index.css";

const Main = ({ foodItems, addToCart, searchTerm, toggleSidebar }) => {
  return (
    <div className="relative xl:col-start-3 col-start-1 col-span-full row-start-1 pt-16 overflow-scroll min-h-screen">
      <div
        className="bg-black w-16 h-16 rounded-full drop-shadow-2xl fixed bottom-20 right-14 z-50 flex items-center justify-center xl:hidden"
        onClick={toggleSidebar}
      >
        <span className="text-white text-4xl">=</span>
      </div>

      {/* <Cart open={open} cartItems={cart} /> */}
      {/* <Menu
          foodItems={foodItems}
          addToCart={addToCart}
          searchTerm={searchTerm}
        /> */}
      {/* <DashPages /> */}
      <Switch>
        <Route path="/dashboard/restaurants" component={Restaurant}></Route>
        <Route path="/dashboard/food">
          <Menu
            foodItems={foodItems}
            addToCart={addToCart}
            searchTerm={searchTerm}
          />
        </Route>
        <Route path="/dashboard/about" component={About}></Route>
      </Switch>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="animate-bounceIn content w-9/12 h-auto">
        <h1 className="text-2xl font-semibold font-mono">
          Yakoyo is a conveniency app to help cushion effect of Convid-19.
          <br />
          Frontend built in React served by a Spring Boot backend.
        </h1>
      </div>
    </div>
  );
};

export default Main;
