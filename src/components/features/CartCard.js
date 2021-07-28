import styled from "styled-components";
import { UPDATE_ITEMS_NUMBER, useStoreContext } from "../../context/ItemsContext";
import Button from "./Button";
import { ADD_ITEM, DELETE_ITEM } from "../../context/ItemsContext";
import { useRef } from "react";

const CartCard = ({ img, name, price, clickHandler, items }) => {
  const StyleDiv = styled.div`
  display: flex;
  width: 100vw -20px;
  justify-content: space-around;
  border-bottom: solid 2px #00000014;
  /* margin: 20px;
  padding: 10px; */
  align-items: center;
  background: #2a213cc7;
`;

const StyleItemsNumberDiv = styled.div`
display: flex;
border: 1px black solid;
border-radius: 15px;
    /* padding: 0 10px; */
`
  const StyleItemsNumberButton = styled.button`
  background: none;
  border: none;
  margin: 3px;
  `
  const games = useStoreContext().games;
  const dispatch = useStoreContext().dispatch;

  // const deleteItem = (e) => {
  //   console.log(name)
  //   dispatch({ type: UPDATE_ITEMS_NUMBER, payload: games.find(item => item.name === name) 
  //   })}
  
  return (
    <StyleDiv>
      <img src={img} style={{ width: "200px", height: "150px" }} alt={name} />
      <p>{name}</p>
      <p>{price * items}$</p>
      <StyleItemsNumberDiv>
        <StyleItemsNumberButton  >+</StyleItemsNumberButton>
        <p style={{margin: "4px 10px"}}>{items}</p>
        <StyleItemsNumberButton value={items}  > -</StyleItemsNumberButton>
      </StyleItemsNumberDiv>

      {/* <Button
        width="10%"
        title="delete"
        padding="5px"
        background="#45a949d9"
        hoverColor="#45a949a6"
        height="fit-content"
        clickHandler={clickHandler}
      />
      <Button
        width="10%"
        title="buy now"
        padding="5px"
        background="#45a949d9"
        hoverColor="#45a949a6"
        height="fit-content"
      /> */}
    </StyleDiv>
  );
};

export default CartCard;
