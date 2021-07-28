import { useStoreContext, DELETE_ITEM } from "../../context/ItemsContext";
import styled from "styled-components";
import Button from "../features/Button";
import CartCard from "../features/CartCard";
import { useState } from "react";
import AddDeleteItems from "../features/AddDeleteItems";
import CartTable from "../features/CartTable";
import OrderSummary from "../features/OrderSummary";

const StyleP = styled.p`
margin: 30px 0;
  font-size: 15px;
`;
const StyleDiv = styled.div`
      display: flex;
    justify-content: space-around;
  `
const ShoppingCart = () => {
  const cartItems = useStoreContext().state.itemsArray;
  const dispatch = useStoreContext().dispatch;
  const [subtotal, setSubtotal] = useState(0);
  // const [subtotal, setSubtotal] = useState(0)
  return (
    <>
      {cartItems?.length > 0 ?
        <StyleDiv>
          <CartTable setSubtotal={setSubtotal} subtotal={subtotal} />
          <OrderSummary subtotal={subtotal} />
        </StyleDiv>
        :
        <StyleP> your cart is empty</StyleP>
      }
    </>)
};

export default ShoppingCart;
