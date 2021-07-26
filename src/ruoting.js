import { Switch, Route } from "react-router-dom";
import NavBar from "./components/features/NavBar";
import Games from "./components/pages/Games";
import Home from "./components/pages/Home";
import SingUp from "./components/pages/SignUp";
import ShoppingCart from "./components/pages/ShoppingCart";
import Game from "./components/pages/Game";
import Footer from "./components/features/Footer";
import SingIn from "./components/pages/SignIn";
import { useStoreContext } from "./context/ItemsContext";
import Search from "./components/pages/Search";
const Routing = () => {
  const gameName = useStoreContext().gameName
  const search = useStoreContext().search

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SingUp />
        </Route>
        <Route path="/signin">
          <SingIn />search
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path='/shoppingcart'>
          <ShoppingCart />
        </Route>
        <Route path={`/${gameName}`}>
          <Game name={gameName} />
        </Route>
        <Route path='/search'>
          <Search searchItem={search}/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
export default Routing;
