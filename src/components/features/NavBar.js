import {  Link } from 'react-router-dom'
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <StyleLi className="nav-item active">
              <Link to="/" className="nav-link disabled">
                Home
              </Link>
            </StyleLi>
            <StyleLi className="nav-item active">
              <Link to="/games" className="nav-link disabled">
                Video Games
              </Link>
            </StyleLi>
          </ul>
          <form className="form-inline my-2 my-lg-0">
      
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            /> 

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
