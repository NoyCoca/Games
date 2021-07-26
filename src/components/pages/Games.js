import { getGamesApi } from "../../functions";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CardItem from "../features/CardItem";
import PageHeader from "../features/PageHeader";
import { useStoreContext } from "../../context/ItemsContext";
import { Link } from "react-router-dom";
const StyleCardContinuer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 25px 5px;
  justify-content: center;
  margin: 50px;
`;


const Games = () => {
  const games = useStoreContext().games

  return (
    <>
      <PageHeader title="New and trending" />
      <StyleCardContinuer>
        {games ? (
          games.map((game) => {

            return (
              <CardItem linkTo="games" name={game.name} img={game.background_image} price={game.price} released={game.released} genres={game.genres} added={game.added} playtime={game.playtime} rating={game.rating} />
            )
          })
        ) : (
          <img src="https://cdn.dribbble.com/users/2077073/screenshots/6005120/loadin_gif.gif" alt="loading" />
        )}
      </StyleCardContinuer>
    </>
  );
};

export default Games;
