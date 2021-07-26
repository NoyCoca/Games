import { useStoreContext } from "../../context/ItemsContext";
import CardItem from "../features/CardItem";
import styled from "styled-components";

const StyleDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
height: 81vh;
;
`
const Search = ({ searchItem }) => {
    const games = useStoreContext().games;
    let searchGames;
    if (searchItem?.length > 0) {

        searchGames = games.filter(game => game.name.substring(0, searchItem.length).toUpperCase() === searchItem.toUpperCase())
    }
    return (
        <StyleDiv>
            {

                searchGames?.length > 0 ? searchGames.map(game => 
                <CardItem linkTo ="search" name={game.name} img={game.background_image} price={game.price} /> )
                : <h4>no match</h4>
               
            }
        </StyleDiv>)

}

export default Search;