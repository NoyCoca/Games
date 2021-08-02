import styled from "styled-components";

const StyleFooter = styled.footer`
text-align: center;
border-top: #45a949d9 solid 1px;
font-size: 18px;
margin: 3px;
i{
    margin: 5px;
    color: #45a949d9 ;
    &:hover{
        color: #79f97ed9;
    }
}
`

const Footer =()=>{
    return <StyleFooter>
        <i className="far fa-copyright">  Noy Coca </i>
        <i className="fab fa-linkedin-in"> Linkedin </i>
        <a href="https://github.com/">
            <i className="fab fa-github"> Github </i>

        </a>
        
    </StyleFooter>
}

export default Footer;