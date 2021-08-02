import { useState, useEffect } from 'react';
import { getGamesApi } from "../functions";

const useGames = (type) => {

  const [games, setGames] = useState([]);
  useEffect(
    () => {
      getGamesApi(type).then((data) => {
        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          const price = Math.floor(Math.random() * 300);
          game.price = price;
          game.items = 1;
        }
        console.log(data);
        setGames(data);
      })
    },
    []
  );


  return games;
}

export default useGames;