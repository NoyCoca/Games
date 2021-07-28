import styled from "styled-components";
import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext";

import { Link } from 'react-router-dom'
import Button from "./Button";
const StyleImg = styled.img`
  height: 25vh;
  border-radius: 10px 10px 0 0;
`;
const StyleCard = styled.div`
  margin:20px 10px ;
  border: none;
  background: #00000063;
    color: white;
    transition: transform .3s;
&:hover{
  transform: scale(1.1);
  z-index: 1;
}
`;

const StyleHoverDiv = styled.div`
position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: #01000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
   align-items: center;
    &:hover{
opacity: 1;
    }
`
const StyleDivHover = styled.div`
position: absolute;
background:#000000ad;
width: 100%;
opacity: 0;
height: 100%;
&:Hover{
  opacity: 1;
}
`
const CardItem = ({ name, img, price, linkTo, released, genres, added, playtime, rating }) => {

  const games = useStoreContext().games;
  const dispatch = useStoreContext().dispatch;
  // const gameName = useStoreContext().gameName
  const setGameName = useStoreContext().setGameName

  return (
    < Link to={name} style={{ textDecoration: "none", color: "black" }} >
      <StyleCard className="card" style={{ width: "18rem", backgroundImage: `url(${img})`, height: '45vh', backgroundSize: "110% 100%", display: "flex", flexDirection: "column-reverse", borderRadius:"20px"}} onClick={() => setGameName(name)} >
        {/* <StyleImg className="card-img-top" src={img} alt="Card image cap" /> */}
        <div style={{ textAlign: "center", background: "#0000005c", lineHeight:"1rm" }}>
          <p className="card-text" style={{ fontFamily: "fantasy"}} >{name}</p>
        {<p style={{ textAlign: "center"}}>
          {
            genres?.map((genre,index) =>
              <span key={index}> | {genre.name}</span>
            )
          }
        </p>
 }
        </div>
        {/* <p>{price} <i class="fas fa-dollar-sign"> </i></p> */}
        <StyleDivHover className="card-body" style={{}}>
          <div style={{ height: "80%", lineHeight: 1.5, margin: "5px"}}>

            <p className="card-text">{name}</p>
            <p>{released}</p>
            <p>
              {
                genres?.map((genre, index)=>
                  <span key={index}> | {genre.name}</span>
                )
              }
            </p>
            <p> <i className="fas fa-gamepad"></i>  {added}</p>
            <p> <i className="fas fa-stopwatch"></i>  {playtime} minutes</p>
            <p> <i className="far fa-star" style={{ color: "#e0e009cf" }}></i> {rating}</p>
          </div>
          {/* <Link to={linkTo} style={{ height: "20%" }}> */}
            {/* <Button
              width="100%"
              title="Add to cart +"
              padding="5px"
              background="#fbfbfbb0"
              hoverColor="#fbfbfbd1"
              clickHandler={() => {
                dispatch({
                  type: ADD_ITEM,
                  payload: games?.find((game) => game.name === name),
                });
              }}
            />
          </Link>
 */}
        </StyleDivHover>
      </StyleCard>
    </Link>
  );
};

export default CardItem;