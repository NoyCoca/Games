import { useRef, useState } from "react";
import { checkUserName, checkEmail, checkPassword } from "../../functions";
import styled from "styled-components";
import Button from "../features/Button";
import { useStoreContext } from "../../context/ItemsContext";
import { Link } from "react-router-dom";
import SignInForm from "../features/SignInFrom";

const StyleDiv = styled.div`
  /* background-image: url("https://thebusinessofesports.com/wp-content/uploads/2021/04/Diesel_blog_epic-games-store-update_EGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg"); */
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
