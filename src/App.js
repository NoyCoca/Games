// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { getGamesApi } from "./functions";
import Routing from "./ruoting";
import { useReducer, useEffect, useState, useLayoutEffect, useMemo } from "react";
import {
  StoreContextProvider,
  reducer,
  initialState,
} from "./context/ItemsContext";

function App() {
  const [newGames, setNewGame] = useState();
  const [popularGames, setPopularGames] = useState();
  const [allGames, setAllGames] = useState([]);
  useEffect(
    () => {
      getGamesApi("new").then((data) => {
        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          const price = Math.floor(Math.random() * 300);
          game.price = price;
          game.items = 1;
        }
        console.log(data);
        setNewGame(data);
        setAllGames((oldValue)=>[...oldValue,...data])
      })
    },
    []
  );
  useEffect(
    () => {
      getGamesApi("pulper").then((data) => {
        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          const price = Math.floor(Math.random() * 300);
          game.price = price;
          game.items = 1;
        }
        console.log(data);
        setPopularGames(data);
        setAllGames((oldValue) => [...oldValue, ...data])
        // console.log();
      }).then(()=>console.log(allGames))
    },
    []
  );
  

  const [state, dispatch] = useReducer(reducer, initialState);
  const [userName, setUserName] = useState();
  const [gameName, setGameName] = useState();
  const [search, setSearch] = useState();
  console.log(allGames)
  return (
    <Router>
      <StoreContextProvider value={{ state, dispatch, newGames, userName, setUserName, gameName, setGameName, search, setSearch, popularGames, allGames }}>
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
