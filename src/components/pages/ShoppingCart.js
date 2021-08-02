import { useStoreContext } from "../../context/ItemsContext";
import styled from "styled-components";
import { useState } from "react";
import CartTable from "../features/CartTable";
import OrderSummary from "../features/OrderSummary";


const StyleDiv = styled.div`
      display: flex;
    justify-content: space-around;
  `
const ShoppingCart = () => {
  const cartItems = useStoreContext().state.itemsArray;
  const [subtotal, setSubtotal] = useState(0);
  return (
    <div style={{height:"85vh"}}>
      {cartItems?.length > 0 ?
        <StyleDiv>
          <CartTable setSubtotal={setSubtotal} subtotal={subtotal} />
          <OrderSummary subtotal={subtotal} />
        </StyleDiv>
        :
        <div style={{textAlign:"center"}}>
          <img style={{width:"400px"}} src="https://www.99fashionbrands.com/wp-content/uploads/2020/12/empty_cart-1200x900.png" />
        </div>
      }
    </div>)
};

export default ShoppingCart;
