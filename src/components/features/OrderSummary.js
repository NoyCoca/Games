import styled from "styled-components";
import Button from "./Button";

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

const OrderSummary = ({ subtotal }) => {
    return (
        <>
            <p> cdsvcdsdsvs </p>
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
                )}
        </>
    )
}
export default OrderSummary;