import { getGamesApi } from "../../functions";
import styled from "styled-components";
import { useEffect, useState } from "react";
import CardItem from "../features/CardItem";
import PageHeader from "../features/PageHeader";
import { useStoreContext } from "../../context/ItemsContext";
const StyleCardContinuer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 25px 5px;
  justify-content: center;
  margin: 50px;
`;


const NewTrending = () => {
  const newGames = useStoreContext().newGames

  return (
    <>
      <PageHeader title="New and trending" />
      <StyleCardContinuer>
        {newGames ? (
     
          newGames.map((game) => {
            return (
              <CardItem key= {game?.name}linkTo="games" game={game} />
            )
          })
        ) : (
            <img src="https://www.xenren.co/loader.gif" alt="loading" />
        )}
      </StyleCardContinuer>
    </>
  );
};

export default NewTrending;
