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
  const setSearch = useStoreContext().setSearch

  return (
    <StyleDivContinuer>
      <StyleH1>Games</StyleH1>
      <form className="form-inline my-2 my-lg-0" style={{ width: "45%" }}>
        <input
          style={{ background: "rgb(241 241 241 / 10%)", width: "88%", color: "white" }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to={'/search'}>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
        </Link>

      </form>

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
          <Link to="/shoppingcart" >
            <StyleI className="fas fa-shopping-cart" >{itemState.itemsNumber} </StyleI>
          </Link>
        </p>
      </div>
      

    </StyleDivContinuer>
  );
};

export default Header;
