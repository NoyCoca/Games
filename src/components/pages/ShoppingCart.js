import { useStoreContext,  DELETE_ITEM } from "../../context/ItemsContext";
import styled from "styled-components";
import Button from "../features/Button";
import CartCard from "../features/CartCard";

const StyleP = styled.p`
  text-align: center;
  margin: 30px;
  font-size: 20px;
`;
const StyleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShoppingCart = () => {
  const cartItems = useStoreContext().state.itemsArray;
  const dispatch = useStoreContext().dispatch;
let subtotal = 0;

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems?.map((item) => {
          const price = Math.floor(Math.random() * 300);
          subtotal += price;
          return (
            <CartCard
              img={item.img || item.background_image}
              name={item.name}
              price={price}
              clickHandler={() =>
                dispatch({ type: DELETE_ITEM, payload: item })
              }
            />
          );
        })
      ) : (
        <StyleP> your cart is empty</StyleP>
      )}
      {subtotal > 0 ? (
        <StyleDiv>
          <StyleP> Subtotal: {subtotal}$</StyleP>
          <Button
            width="10%"
            title={ <i className= "fas fa-credit-card"> Pay </i>}
            padding="5px"
            background="white"
            border="solid 1px #45a949a6"
            hoverColor="#45a949a6"
            height="fit-content"
          />
        </StyleDiv>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShoppingCart;
