import styled from "styled-components";
import { ADD_ITEM, DELETE_ITEM, useStoreContext } from "../../context/ItemsContext";

const StyleItemsNumberDiv = styled.div`
display: flex;
border: 1px solid;
border-radius: 15px;
width: fit-content;
`
const StyleItemsNumberButton = styled.button`
  background: none;
  border: none;
  margin: 3px;
  color:white;
  `

const AddDeleteItems = ({ items, name }) => {
    const allGames = useStoreContext().allGames;
    const dispatch = useStoreContext().dispatch;
    const deleteItem = (e) => {
        const payload = allGames.find(item => item.name === name);
        console.log(name, allGames, payload )
        dispatch({ type: DELETE_ITEM, payload })
    }
    return (
        <StyleItemsNumberDiv>
            <StyleItemsNumberButton onClick={(e) => dispatch({ type: ADD_ITEM, payload: allGames.find(item => item.name === name) })} >+</StyleItemsNumberButton>
            <p style={{ margin: "4px 10px" }}>{items}</p>
            <StyleItemsNumberButton onClick={deleteItem} > -</StyleItemsNumberButton>
        </StyleItemsNumberDiv>
    )
}

export default AddDeleteItems;