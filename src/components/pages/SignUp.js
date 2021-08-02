import styled from "styled-components";
import SignInForm from "../features/SignInFrom";

const StyleDiv = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const SingUp = () => {

  return (
    <StyleDiv>
      <SignInForm/>
    </StyleDiv>
  );
};
export default SingUp;
