import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext"
import styled from "styled-components";
import Button from "../features/Button";
import { useState } from "react";

const StyleDiv = styled.div`
display: flex;
width: 50%;
flex-direction: row;
justify-content: space-around;
align-items: center;
height: 75vh;
`
const StyleInfoDiv = styled.div`
width: 45%;
margin-top: 5%;
margin-left: 6%;


`
const StyleDivImg = styled.div`
display: flex;
width:60%;
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
const StyleH1 = styled.h1`
font-size: 60px;
    font-family: fantasy;
`
const Game = ({ name }) => {
    const allGames = useStoreContext().allGames
    const dispatch = useStoreContext().dispatch
    const game = allGames.find(game => game.name === name)

    const [mainImg, SetMainImg] = useState(game?.background_image);

    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#00000094",
        }}>

            <StyleDiv>

                <img style={{ width: "20vw", height: "45vh", marginTop: "5%", borderRadius: "30px" }} src={game.background_image} alt={game.name} />
                <StyleInfoDiv >
                    <StyleH1> {game.name}</StyleH1>
                    <p>{game.released}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0" }}>
                        <div >
                            <h3> playes </h3>
                            <p> <i className="fas fa-gamepad"></i>  {game.added}</p>
                        </div>
                        <div>
                            <h3> playTime </h3>
                            <p> <i className="fas fa-stopwatch"></i>  {game.playtime} minutes</p>
                        </div>
                        <div>
                            <h3> reting </h3>
                            <p> <i className="far fa-star" style={{ color: "#e0e009cf" }}></i> {game.rating}</p>
                        </div>
                    </div>

                    <p>gagger:
                        {
                            game.genres.map((genre, index) =>
                                <span key={index}> | {genre.name}</span>
                            )
                        }
                    </p>

                    <p>Platform:
                        {
                            game.parent_platforms.map(platform => <span key={platform.platform.name}>| {platform.platform.name} </span>)

                        } </p>
                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0 10px", alignItems: "center" }}>

                        <h1> {game.price}$</h1>
                        <Button
                            width="50%"
                            title="Add to cart +"
                            padding="7px"
                            background="#ffffffdb"
                            hoverColor="#efefef6b"
                            clickHandler={() => {
                                dispatch({
                                    type: ADD_ITEM,
                                    payload: allGames?.find((game) => game.name === name),
                                });
                            }}
                        />
                    </div>

                </StyleInfoDiv>



            </StyleDiv>


            <div >

                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "150px 80px" }}>

                    <div style={{ width: "80%", textAlign: "-webkit-center" }}>
                        <img style={{ width: "60%", height: "50vh" }} src={mainImg} alt={game.name} />
                        <StyleDivImg >
                            {
                                game.short_screenshots.map(gameImg =>
                                    <img key={gameImg.id} src={gameImg.image} alt={name} style={{ width: "15%" }}
                                        onMouseOver={() => SetMainImg(gameImg.image)}
                                    />)
                            }
                        </StyleDivImg>
                    </div>
                </div>
                {/* <StyleInfoDiv >
            <StyleH1> {game.name}</StyleH1>
            <p>{game.released}</p>
            <div style={{ display: "flex", justifyContent: "space-between", margin:"20px 0" }}>
                <div >
                    <h3> playes </h3>
                    <p> <i className="fas fa-gamepad"></i>  {game.added}</p>
                </div>
                <div>
                    <h3> playTime </h3>
                    <p> <i className="fas fa-stopwatch"></i>  {game.playtime} minutes</p>
                </div>
                <div>
                    <h3> reting </h3>
                    <p> <i className="far fa-star" style={{ color: "#e0e009cf" }}></i> {game.rating}</p>
                </div>
            </div>

            <p>gagger:
                {
                    game.genres.map((genre, index) =>
                        <span key={index}> | {genre.name}</span>
                    )
                }
            </p>

            <p>Platform:
                {
                    game.parent_platforms.map(platform => <span key={platform.platform.name}>| {platform.platform.name} </span>)

                } </p>
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
        </StyleInfoDiv> */}
            </div>
        </div>)
}

export default Game