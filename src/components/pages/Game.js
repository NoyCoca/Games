import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext"
import styled from "styled-components";
import Button from "../features/Button";
import { useState } from "react";

const StyleDiv = styled.div`
display: flex;
justify-content: center;
background: #00000094;
width: 100%;
height: 80vh;
align-items:center;
`
const StyleInfoDiv = styled.div`
justify-content: center;
    display: flex;
    flex-direction: column;
`
const StyleDivImg = styled.div`
display: flex;
width:80%;
position: relative;
bottom: 0;
overflow: auto;
&::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
&::-webkit-scrollbar-track {
  background: black;
}
&::-webkit-scrollbar-thumb {
  background: #555;
}
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`
const Game = ({ name }) => {
    const games = useStoreContext().games
    const dispatch = useStoreContext().dispatch
    const game = games.find(game => game.name === name)

    const [mainImg, SetMainImg] = useState(game.background_image);
    console.log(game)
    return (<StyleDiv>
        <div style={{ width: "50%"}}>
            <img style={{ width: "80%", height:"70vh"}} src={mainImg} alt={game.name} />
            <StyleDivImg >
                {
                    game.short_screenshots.map(gameImg => 
                    <img src={gameImg.image} alt={name} style={{ width: "15%" }} 
                            onMouseOver={() => SetMainImg(gameImg.image)}
                    />)
                }
            </StyleDivImg>
        </div>
        <StyleInfoDiv >
            <h3> {game.name}</h3>
            <p>{game.released}</p>
            <p>
                {
                    game.genres.map(genre =>
                        <span> | {genre.name}</span>
                    )
                }
            </p>
            <p> <i class="fas fa-gamepad"></i>  {game.added}</p>
            <p> <i class="fas fa-stopwatch"></i>  {game.playtime} minutes</p>
            <p> <i class="far fa-star" style={{ color: "#e0e009cf" }}></i> {game.rating}</p>

            <Button
                width="100%"
                title="Add to cart +"
                padding="7px"
                background="#ffffffdb"
                hoverColor="#efefef6b"
                clickHandler={() => {
                    dispatch({
                        type: ADD_ITEM,
                        payload: games?.find((game) => game.name === name),
                    });
                }}
            />
        </StyleInfoDiv>
    </StyleDiv>)
}

export default Game