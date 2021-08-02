import { Link } from 'react-router-dom'
import Header from './Header';
import styled from 'styled-components';

const StyleLi = styled.li`
  color: black;
  &:hover {
    border-bottom: solid 2px #4caf50;
  }
`;
const NavBar = () => {

  return (
    <>
      <Header />

      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "none" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span style={{ color: "white" }} ><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <StyleLi className="nav-item active">
              <Link to="/" className="nav-link disabled" style={{ color: "white" }}>
                {"New & trending"}
              </Link>
            </StyleLi>
            <StyleLi>
              <Link to="/popular" className="nav-link disabled" style={{ color: "white" }}>
                {"Popular"}
              </Link>
            </StyleLi>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
