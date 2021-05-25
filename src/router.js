import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Nav";
import Food  from "./components/Food";

const Navigation = () => {
    return (
        <div>
            
<Router>
<Switch>
          <Route path="/food" component={Food} />
          <Route path="/" component={Home} />
        </Switch>
</Router>
        </div>
    )
}

export default Navigation
