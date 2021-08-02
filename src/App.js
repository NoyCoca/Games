// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./ruoting";
import { useReducer, useEffect, useState } from "react";
import {
  StoreContextProvider,
  reducer,
  initialState,
} from "./context/ItemsContext";
import useGames from "./hooks/useGames";

function App() {
  const [allGames, setAllGames] = useState([]);
  const newGames = useGames('new');
  const popularGames = useGames('pulper');


  useEffect(() => {
    setAllGames([...popularGames, ...newGames])
  }, [popularGames, newGames])


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
