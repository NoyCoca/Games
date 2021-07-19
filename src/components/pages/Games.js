import { getGamesApi } from "../../functions";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CardItem from "../features/CardItem";
import PageHeader from "../features/PageHeader";

const StyleCardContinuer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 25px 5px;
  justify-content: center;
`;
const Games = () => {
  const [games, setGame] = useState();
  useEffect(
    () =>
      getGamesApi().then((data) => {
        for (let i = 0; i < data.length; i++) {
          const game = data[i];
          const price = Math.floor(Math.random() * 300);
          game.price = price;
        }
        setGame(data);
      }),
    []
  );

  return (
    <>
      <PageHeader title="Video" />
      <StyleCardContinuer>
        {games ? (
          games.map((game) => (
            <CardItem name={game.name} img={game.background_image} price={game.price} />
          ))
        ) : (
          <img src="https://cdn.dribbble.com/users/2077073/screenshots/6005120/loadin_gif.gif" alt="loading" />
        )}
      </StyleCardContinuer>
    </>
  );
};

export default Games;
