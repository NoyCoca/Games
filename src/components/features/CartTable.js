import styled from "styled-components";
import { useStoreContext } from "../../context/ItemsContext";
import AddDeleteItems from "./AddDeleteItems";

const StyleP = styled.p`
margin: 30px 0;
  font-size: 15px;
  `;
const CartTable = ({ setSubtotal, subtotal }) => {
    let total = 0;
    const cartItems = useStoreContext().state.itemsArray;
    return (
        <table className="table" style={{ width: "45%" }}>

            <thead>
                <tr>
                    <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}></th>
                    <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }} >Name</th>
                    <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}>Oty</th>
                    <th scope="col" style={{ borderBottom: "2px solid #dee2e61f" }}>price</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    cartItems.map(game => {
                        total += game.price;
                        return (
                            <tr key={game.price}>
                                <td style={{ borderBottom: "2px solid #dee2e61f" }} ><img src={game.img || game.background_image} style={{ width: "100px", height: "100px" }} alt={game.name} /></td>
                                <td style={{ borderBottom: "2px solid #dee2e61f" }}>{game.name}</td>
                                <td style={{ borderBottom: "2px solid #dee2e61f" }}><AddDeleteItems items={game.items} name={game.name} /></td>
                                <td style={{ borderBottom: "2px solid #dee2e61f" }}>{game.price * game.items} $</td>
                            </tr>
                        )
                        
                    })
                     
                }
            </tbody>
        </table>)


}

export default CartTable;