// import logo from "./logo.svg";
import { useReducer, useEffect, useState } from "react";
import {
  StoreContextProvider,
  reducer,
  initialState,
} from "../context/ItemsContext";
import useGames from "../hooks/useGames";

const StoreProvider = ({ children }) => {

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

  return < StoreContextProvider value={{ state, dispatch, newGames, userName, setUserName, gameName, setGameName, search, setSearch, popularGames, allGames }
  }>
    {children}
  </StoreContextProvider >
}

export default StoreProvider;