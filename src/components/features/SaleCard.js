import styled from "styled-components";
import { useStoreContext, ADD_ITEM } from "../../context/ItemsContext";
import { useSaleContext } from "../../context/SaleCnotext";
import Button from "./Button";

const StyleDivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  width: 20%;
`;


const SaleCard = ({ name, price, img }) => {
  const StyleDiv = styled.div`
  display: flex;
  margin: 20px;
  box-shadow: 0px 0px 7px 0px black;

  width: 90%;
  background: black;
  color: aliceblue;
    background-image: url(${img});
background-size: 100% 100%;
      height: 50vh;

`;

  const dispatch = useStoreContext().dispatch;
  const SaleBigImg = useSaleContext().SaleBigImg;
  const SaleSmallImgs = useSaleContext().SaleSmallImgs;
  return (
    <StyleDiv>
      <StyleDivInfo>
        <h3>{name} </h3>
        <p>{price}</p>
        <Button
          title="Buy"
          // width="80%"
          padding="5px"
          background="#45a949d9"
          hoverColor="#45a949a6"
          clickHandler={() => {
            dispatch({
              type: ADD_ITEM,
              payload: SaleSmallImgs.find((game) => game.name === name) || SaleBigImg.find((game) => game.name === name),
            });
          }}
        />
      </StyleDivInfo>
      {/* <StyleImg src={img} /> */}
    </StyleDiv>
  );
};

export default SaleCard;
