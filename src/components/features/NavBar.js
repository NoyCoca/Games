import {  Link } from 'react-router-dom'
import Header from './Header';
import styled from 'styled-components';
import { useStoreContext } from '../../context/ItemsContext';

const StyleLi = styled.li`
  color: black;
  &:hover {
    border-bottom: solid 2px #4caf50;
  }
`;
const NavBar = () => {

  const setSearch = useStoreContext().setSearch
  const search = useStoreContext().search
  return (
    <>
      <Header />
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: "none"}}>
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
              <Link to="/" className="nav-link disabled" style={{color:"white"}}>
                Home
              </Link>
            </StyleLi>
            <StyleLi className="nav-item active">
              <Link to="/games" className="nav-link disabled" style={{ color: "white" }}>
                {"New & trending"}
              </Link>
            </StyleLi>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <Link to={search.length > 0 }>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
</Link>
            
          <Link to={'/search'}>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              >
              Search
            </button>
              </Link>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
