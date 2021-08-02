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
    const allGames = useStoreContext().allGames;
    let searchGames;
    console.log(allGames)
    if (searchItem?.length > 0) {

        searchGames = allGames.filter(game => game.name.substring(0, searchItem.length).toUpperCase() === searchItem.toUpperCase())
    }
    return (
        <StyleDiv>
            {

                searchGames?.length > 0 ? searchGames.map(game => 
                <CardItem key={game.id} linkTo ="search" game={game} /> )
                : <h4>no match</h4>
               
            }
        </StyleDiv>)

}

export default Search;