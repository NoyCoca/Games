import styled from "styled-components";
import Button from "./Button";

const CartCard = ({ img, name, price, clickHandler }) => {const StyleDiv = styled.div`
  display: flex;
  width: 100vw -20px;
  justify-content: space-around;
  border-bottom: solid 2px #00000014;
  margin: 20px;
  padding: 10px;
  align-items: center;
 
  
`;

  return (
    <StyleDiv>
      <img src={img} style={{ width: "200px", height: "150px" }} alt={name} />
      <p>{name}</p>
      <p>{price}$</p>
      <Button
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
      />
    </StyleDiv>
  );
};

export default CartCard;
