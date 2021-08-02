import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { useStoreContext } from "../../context/ItemsContext";
import { checkEmail, checkPassword, checkUserName, AllTrue } from "../../functions";
import Button from "./Button";

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 60vh;
  padding: 40px;
  border-radius: 10px;
  justify-content: space-between;
      border:2px solid #dee2e61f;
      background: #00000094;
`;

const StyleInput = styled.input`
  width: 80%;
  margin: 5px;
  padding: 15px;
  border-radius: 5px 5px;
`;

const StyleSpan = styled.span`
  font-size: 10px;
  color: red;
`;

const SignInForm = () => {
    const [isUserName, setIsUserName] = useState(true);
    const [isEmail, setIsEmail] = useState(true);
    const [isPassword, setIsPassword] = useState(true);
    const [isAllRequieTrue, setIsAllRequieTrue] = useState();
    const setUserName = useStoreContext().setUserName;

    const inputRefName = useRef();
    return (<StyleForm >
        <h1 style={{fontFamily:` 'Games',sans-serif`}}>Sing up</h1>
        <StyleInput
            name="userName"
            placeholder="User name"
            type="text"
            required
            onBlur={(e) => setIsUserName(checkUserName(e))}
            ref={inputRefName}
        />
        {isUserName ? (
            <StyleSpan></StyleSpan>
        ) : (
            <StyleSpan>user name require </StyleSpan>
        )}

        <StyleInput
            name="email"
            placeholder="Email"
            type="email"
            required
            onBlur={(e) => setIsEmail(checkEmail(e))}
        />
        {isEmail ? (
            <StyleSpan></StyleSpan>
        ) : (
            <StyleSpan> email require </StyleSpan>
        )}

        <StyleInput
            name="password"
            placeholder="Password"
            type="password"
            required
            onBlur={(e) => setIsPassword(checkPassword(e))}
        />
        {isPassword ? (
            <StyleSpan></StyleSpan>
        ) : (
            <StyleSpan> password require </StyleSpan>
        )}
        <Link to={isAllRequieTrue ? "/" : "signup"} style={{ width: "100%", textAlign: "center" }}>

            <Button
                title="Sing up"
                width="80%"
                padding="5px"
                background="#45a949d9"
                hoverColor="#45a949a6"
                clickHandler={() => {
                    setIsAllRequieTrue(AllTrue(isUserName, isEmail, isPassword))
                    setUserName(isAllRequieTrue ? inputRefName.current.value : null)
                }}
            />
        </Link>

    </StyleForm>)
}

export default SignInForm;