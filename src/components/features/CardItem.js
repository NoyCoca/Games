import styled from "styled-components";
import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext";

import { Link } from 'react-router-dom'

const StyleCard = styled.div`
  margin:20px 10px ;
  border: none;
  background: #00000063;
    color: white;
    transition: transform .3s;
&:hover{
  transform: scale(1.1);
  z-index: 1;
}`;
    
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
const StyleInsideCard = styled.div`
text-align: center;
background: #0000005c;
 line-height: 1rem;
 height: fit-content;
position: relative;
`
const CardItem = (props) => {
  const { name, background_image, released, genres, added, playtime, rating } = props.game
  const setGameName = useStoreContext().setGameName

  return (
    < Link to={name} style={{ textDecoration: "none", color: "black" }} >
      <StyleCard className="card" style={{ width: "18rem", backgroundImage: `url(${background_image})`, height: '350px', backgroundSize: "110% 100%", display: "flex", flexDirection: "column-reverse", borderRadius: "20px" }} onClick={() => { setGameName(name) }}>
        <StyleInsideCard style={{}}>
          <p className="card-text" style={{ fontFamily: "fantasy" }} >{name}</p>
          {<p style={{ textAlign: "center" }}>
            {
              genres?.map((genre, index) =>
                <span key={index}> | {genre.name}</span>
              )
            }
          </p>
          }
        </StyleInsideCard>
        <StyleDivHover className="card-body" style={{}}>
          <div style={{ height: "80%", lineHeight: 1.5, margin: "5px" }}>

            <p className="card-text">{name}</p>
            <p>{released}</p>
            <p>
              {
                genres?.map((genre, index) =>
                  <span key={index}> | {genre.name}</span>
                )
              }
            </p>
            <p> <i className="fas fa-gamepad"></i>  {added}</p>
            <p> <i className="fas fa-stopwatch"></i>  {playtime} minutes</p>
            <p> <i className="far fa-star" style={{ color: "#e0e009cf" }}></i> {rating}</p>
          </div>
        </StyleDivHover> 
      </StyleCard>
    </Link>
  );
};

export default CardItem;