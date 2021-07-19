import styled from "styled-components";


const Button = ({
  title,
  clickHandler,
  width,
  padding,
  background,
  hoverColor,
  height,
  border
}) => {
  const StyleButton = styled.button`
    height: ${height};
    width: ${width};
    padding: ${padding};
    background: ${background};
    border: none;
    margin: 5px;
    border-radius: 5px;
    border: ${border};
    &:hover {
      background: ${hoverColor};
    }
  `;
  return <StyleButton className="animate__animated animate__bounce animate__delay-1s" onClick={clickHandler}>{title}</StyleButton>;
};

export default Button;