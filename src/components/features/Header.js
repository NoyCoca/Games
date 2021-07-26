import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStoreContext } from "../../context/ItemsContext";

const StyleDivContinuer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4caf50;
  border-bottom: solid 1px;
`;

const StyleH1 = styled.h1`
    font-family: 'Games', sans-serif;
    font-size: 60px;
`
const StyleI = styled.i`
text-decoration: none;
    color: #ffffff8a;
    font-size: 20px;
    margin: 0px 8px 0px 0px;
`
const Header = () => {
  const itemState = useStoreContext().state;
  const userName = useStoreContext().userName;
  return (
    <StyleDivContinuer>
      <StyleH1>NC Games</StyleH1>
      <div style={{
        display: "flex", alignSelf: "center",
        justifyContent: "space-around"
      }}>
        <div>

          {
            userName ? <StyleI className="far fa-user"> hello {userName} |  </StyleI> : <> <Link to="/signup"><StyleI className="far fa-user"> |  </StyleI></Link> </>
          }

        </div>
        <p>
          <Link to="/shoppingcart">
            <StyleI className="fas fa-shopping-cart">{itemState.itemsNumber} </StyleI>
          </Link>
        </p>
      </div>
    </StyleDivContinuer>
  );
};

export default Header;
