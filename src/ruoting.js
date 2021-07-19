import { Switch, Route } from "react-router-dom";
import NavBar from "./components/features/NavBar";
import Games from "./components/pages/Games";
import Home from "./components/pages/Home";
import SingUp from "./components/pages/SignUp";
import ShoppingCart from "./components/pages/ShoppingCart";
import Game from "./components/pages/Game";
import Footer from "./components/features/Footer";
const Routing = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/singup">
          <SingUp />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path='/shoppingcart'>
          <ShoppingCart />
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
export default Routing;
