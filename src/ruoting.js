import { Switch, Route } from "react-router-dom";
import NavBar from "./components/features/NavBar";
import NewTrending from "./components/pages/NewTrending";
import SingUp from "./components/pages/SignUp";
import ShoppingCart from "./components/pages/ShoppingCart";
import Game from "./components/pages/Game";
import Footer from "./components/features/Footer";
import SingIn from "./components/pages/SignIn";
import { useStoreContext } from "./context/ItemsContext";
import Search from "./components/pages/Search";
import Popular from "./components/pages/Popular";
const Routing = () => {
  const gameName = useStoreContext().gameName
  const search = useStoreContext().search

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact  path="/">
          <NewTrending />
        </Route>
        <Route path="/signup">
          <SingUp />
        </Route>
        <Route path="/signin">
          <SingIn />search
        </Route>
        <Route path="/popular">
          <Popular />
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
