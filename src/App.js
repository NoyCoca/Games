// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { getGamesApi } from "./functions";
import Routing from "./ruoting";
import { useReducer, useEffect, useState } from "react";
import {
  StoreContextProvider,
  reducer,
  initialState,
} from "./context/ItemsContext";

function App() {
  const [games, setGame] = useState();
  useEffect(
    () =>
      getGamesApi().then((data) => {
        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          const price = Math.floor(Math.random() * 300);
          game.price = price;
          game.items = 1;
        }
        console.log(data);
        setGame(data);
      }),
    []
  );
  const [state, dispatch] = useReducer(reducer, initialState);
  const [userName, setUserName] = useState();
  const [gameName, setGameName] = useState();
  const [search, setSearch] = useState();
  return (
    <Router>
      <StoreContextProvider value={{ state, dispatch, games, userName, setUserName, gameName, setGameName, search, setSearch }}>
        <div className="App">
          <div className="AppBack">
            <Routing />
          </div>
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
