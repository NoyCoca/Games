
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStoreContext } from "../../context/ItemsContext";
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
  height: 45vh;
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

const SingIn = () => {
    const setUserName = useStoreContext().setUserName;
    const inputRefName = useRef();
    return (
        <StyleDiv>
            <StyleForm>
                <h1>Sing In</h1>
                <StyleInput
                    name="userName"
                    placeholder="User name"
                    type="text"
                    required
                    ref={inputRefName}
                />

                <StyleInput
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                />
                <Link to='/' >
                    <Button
                        title="Sing up"
                        width="80%"
                        padding="5px"
                        background="#45a949d9"
                        hoverColor="#45a949a6"
                        clickHandler={() => setUserName(inputRefName.current.value)}
                    />
                </Link>
            </StyleForm>
        </StyleDiv>
    );
};
export default SingIn;
