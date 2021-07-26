import styled from "styled-components";


const Button = ({
  title,
  clickHandler,
  width,
  padding,
  background,
  hoverColor,
  height,
  border,
  color
}) => {
  const StyleButton = styled.button`
    height: ${height};
    width: ${width};
    padding: ${padding};
    background: ${background};
    border: none;
    margin: 5px;
    color: ${color};
    /* border-radius: 5px; */
    border: ${border};
    &:hover {
      background: ${hoverColor};
    }
  `;
  return <StyleButton  onClick={clickHandler}>{title}</StyleButton>;
};

export default Button;