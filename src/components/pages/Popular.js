import styled from "styled-components";
import { useStoreContext } from "../../context/ItemsContext";
import CardItem from "../features/CardItem";
import PageHeader from "../features/PageHeader";
const StyleCardContinuer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 25px 5px;
  justify-content: center;
  margin: 50px;
`;
const Popular = ()=>{
    const popularGames = useStoreContext().popularGames
return(
    <>
        <PageHeader title="Popular" />
        <StyleCardContinuer>
            {popularGames ? (

                popularGames.map((game) => {
                    return (
                        <CardItem key={game?.name} linkTo="games" game={game} />
                    )
                })
            ) : (
                    <img src="https://www.xenren.co/loader.gif" alt="loading" />
            )}
        </StyleCardContinuer>
    </>
)

        }

export default Popular;