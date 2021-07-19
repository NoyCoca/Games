import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStoreContext } from "../../context/ItemsContext";

const StyleDivContinuer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4caf50;
  border-bottom: solid 1px;
`;

const Header = () => {
      const itemState = useStoreContext().state;
  return (
    <StyleDivContinuer>
      <h1> Games</h1>
      <div style={{ display: "flex", alignSelf: "center" , width: "15%",
    justifyContent: "space-around"}}>
        <div>
          <i className="far fa-user">
            <Link to="/singup">SingUp</Link> \ <Link to="/singup">SingUp</Link>
          </i>
        </div>
        <span>
          <Link to="/shoppingcart">
            <i className="fas fa-shopping-cart">{itemState.itemsNumber} </i>
          </Link>
        </span>
      </div>
    </StyleDivContinuer>
  );
};
export default Header;
