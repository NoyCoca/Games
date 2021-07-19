import styled from "styled-components";
import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext";

import { Link } from 'react-router-dom'
import Button from "./Button";
const StyleImg = styled.img`
  height: 25vh;
`;
const StyleCard = styled.div`
  margin: 5px;
`;

const CardItem = ({ name, img, price }) => {

  const games = useStoreContext().games;
  const dispatch = useStoreContext().dispatch;
  return (
    <StyleCard className="card" style={{ width: "18rem" }}>
      <StyleImg className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{name}</p>
        <p>{price}$</p>
        {/* <p>{Math.floor(Math.random() * 300)}$</p> */}
        <Link to="/game">
          <Button
            width="40%"
            title="Show more"
            padding="5px"
            background="#45a949d9"
            hoverColor="#45a949a6"
          />
        </Link>

        <Button
          width="40%"
          title="Buy"
          padding="5px"
          background="#45a949d9"
          hoverColor="#45a949a6"
          clickHandler={() => {
            dispatch({
              type: ADD_ITEM,
              payload: games?.find((game) => game.name === name),
            });
          }}
        />
      </div>
    </StyleCard>
  );
};

export default CardItem;