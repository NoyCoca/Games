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
height: 83vh;
  flex-direction: column;
  border : solid 0.5px #00000014;
  padding: 20px;
`;
const ShoppingCart = () => {
  const cartItems = useStoreContext().state.itemsArray;
  const dispatch = useStoreContext().dispatch;
  const [subtotal, setSubtotal] = useState(0);
  // const [subtotal, setSubtotal] = useState(0)
  return (
    <StyleDiv>
      {cartItems?.length > 0 ?
        <><CartTable setSubtotal={setSubtotal} subtotal={subtotal}/>
          <OrderSummary subtotal={subtotal} />
        </>
        :
        <StyleP> your cart is empty</StyleP>}

      <div>
        {/* 
        {
        subtotal > 0 ? (
          <StyleDiv>
            <h3>Order Summary</h3>
            <StyleP> Subtotal: {subtotal}$</StyleP>
            <Button
              width="100%"
              title={<i className="fas fa-credit-card"> Pay </i>}
              padding="5px"
              background="white"
              border="solid 1px #45a949a6"
              hoverColor="#45a949a6"
              height="fit-content"
            />
          </StyleDiv>
        ) : (
          ""
        )} */}
      </div>
    </StyleDiv>

    // <table className="table" style={{ width: "45%" }}>
    //   <thead>
    //     <tr>
    //       <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}></th>
    //       <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }} >Name</th>
    //       <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}>Oty</th>
    //       <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}>price</th>
    //     </tr>
    //   </thead>
    //   <tbody>

    //     {cartItems?.length > 0 ?
    //       cartItems.map(game => {
    //         subtotal += game.price;
    //         return (
    //           <tr>
    //             <td style={{ borderBottom: "2px solid #dee2e61f" }} ><img src={game.img || game.background_image} style={{ width: "100px", height: "100px" }} alt={game.name} /></td>
    //             <td style={{ borderBottom: "2px solid #dee2e61f" }}>{game.name}</td>
    //             <td style={{ borderBottom: "2px solid #dee2e61f" }}><AddDeleteItems items={game.items} name={game.name} /></td>
    //             <td style={{ borderBottom: "2px solid #dee2e61f" }}>{game.price * game.items} $</td>
    //           </tr>
    //         )
    //       }):
    //       <StyleP> your cart is empty</StyleP>
    //     }
    /* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */
    //   </tbody>
    // </table>
    // <div style={{ display: "flex", margin: "25px", justifyContent: "space-between", height:"100vh" }}>
    //   <StyleDivItems>
    //     <h3>Items Summary </h3>

    //     {cartItems.length > 0 ? (
    //       cartItems?.map((item) => {            
    //         debugger;
    //         subtotal += item.price;
    //         return (
    //           <CartCard
    //             img={item.img || item.background_image}
    //             name={item.name}
    //             items={item.items}
    //             price={item.price}
    //             clickHandler={() =>
    //               dispatch({ type: DELETE_ITEM, payload: item })
    //             }
    //           />
    //         );
    //       })
    //     ) : (
    //       <StyleP> your cart is empty</StyleP>
    //     )}

    //   </StyleDivItems>
    //   <StyleDivPay>

    //     {subtotal > 0 ? (
    //       <StyleDiv>
    //         <h3>Order Summary</h3>
    //         <StyleP> Subtotal: {subtotal}$</StyleP>
    //         <Button
    //           width="100%"
    //           title={<i className="fas fa-credit-card"> Pay </i>}
    //           padding="5px"
    //           background="white"
    //           border="solid 1px #45a949a6"
    //           hoverColor="#45a949a6"
    //           height="fit-content"
    //         />
    //       </StyleDiv>
    //     ) : (
    //       ""
    //     )}
    //   </StyleDivPay>
    // </div >

  );
};

export default ShoppingCart;
