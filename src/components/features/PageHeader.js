import styled from "styled-components"

const StyleH1 = styled.h1`
font-family: 'Games';
  margin: 25px 120px;
`;
const PageHeader = ({ title }) => {
  return <StyleH1> {title} </StyleH1>
}

export default PageHeader;