import styled from "styled-components";
import { ADD_ITEM, UPDATE_ITEMS_NUMBER, useStoreContext } from "../../context/ItemsContext";

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
  color:white
  `
  

const AddDeleteItems = ({ items, name }) => {
    const games = useStoreContext().games;
    const dispatch = useStoreContext().dispatch;
    return (
        <StyleItemsNumberDiv>
            <StyleItemsNumberButton onClick={(e) => dispatch({ type: ADD_ITEM, payload: games.find(item => item.name === name) })} >+</StyleItemsNumberButton>
            <p style={{ margin: "4px 10px" }}>{items}</p>
            <StyleItemsNumberButton onClick={(e) => dispatch({ type: UPDATE_ITEMS_NUMBER, payload: games.find(item => item.name === name) })} > -</StyleItemsNumberButton>
        </StyleItemsNumberDiv>
    )
}
export default AddDeleteItems;