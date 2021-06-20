import Menu from "components/Menu";
import React from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";

const Main = ({ foodItems, addToCart, searchTerm }) => {
  return (
    <div className="transition-transform translate-y-16 relative sm:col-start-3 col-start-1 col-end-13 row-start-1 pt-16 overflow-scroll min-h-screen">
      {/* <Cart open={open} cartItems={cart} /> */}
      {/* <Menu
          foodItems={foodItems}
          addToCart={addToCart}
          searchTerm={searchTerm}
        /> */}
      {/* <DashPages /> */}
      <Switch>
        <Route path="/dashboard/restaurants">
          <Res></Res>
        </Route>
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

const Res = () => {
  return <div>Restaurant!</div>;
};

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content w-9/12 h-auto">
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
