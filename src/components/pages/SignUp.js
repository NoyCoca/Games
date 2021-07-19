import { useState } from "react";
import { checkUserName, checkEmail, checkPassword } from "../../functions";
import styled from "styled-components";
import Button from "../features/Button";

const StyleDiv = styled.div`
  background-image: url("https://thebusinessofesports.com/wp-content/uploads/2021/04/Diesel_blog_epic-games-store-update_EGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg");
  width: 100%;
  height: 85vh;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;
const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 50vh;
  background: #f1f1f185;
  padding: 40px;
  border-radius: 10px;
`;

const StyleInput = styled.input`
  width: 80%;
  margin: 5px;
  padding: 15px;
  border-radius: 5px 5px;
  background: #f1f1f185;
`;

const StyleSpan = styled.span`
  font-size: 10px;
  color: red;
`;
const SingUp = () => {
  const [isUserName, setIsUserName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  return (
    <StyleDiv>
      <StyleForm>
        <h1>Sing up</h1>
        <StyleInput
          name="userName"
          placeholder="User name"
          type="text"
          required
          onBlur={(e) => setIsUserName(checkUserName(e))}
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

        <Button
          title="Sing up"
          width="80%"
          padding="5px"
          background="#45a949d9"
          hoverColor="#45a949a6"
        />
      </StyleForm>
    </StyleDiv>
  );
};
export default SingUp;
