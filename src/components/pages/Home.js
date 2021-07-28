import styled from "styled-components";
import { useSaleContext } from "../../context/SaleCnotext";
import PageHeader from "../features/PageHeader";
import SaleCard from "../features/SaleCard";

const StyleDivContinuer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const StyleSmallCombiner = styled.div`
    display: flex;
    width: 93%;
`

const Home = () => {
  const SaleBigImg = useSaleContext().SaleBigImg;
  const SaleSmallImgs = useSaleContext().SaleSmallImgs;
  return (
    <>
      <PageHeader title="Sale Games" />
      <StyleDivContinuer>
        {SaleBigImg.map((game) => {
          return (<>
            <SaleCard key={game.price} name={game.name} price={game.price} img={game.img} />
            <StyleSmallCombiner>
              {
                SaleSmallImgs.map(game => {
                  return (
                    <SaleCard name={game.name} price={game.price} img={game.img} />

                  )

                })

              }</StyleSmallCombiner>
          </>
          );
        })}
      </StyleDivContinuer>
    </>
  );
};
export default Home;
