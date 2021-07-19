import styled from "styled-components"

const StyleH1 = styled.h1`
  text-align: center;
  margin: 20px;
`;
const PageHeader = ({title})=>{
    return <StyleH1> {title} </StyleH1>
}

export default PageHeader;