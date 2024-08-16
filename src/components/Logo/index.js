import styled from "styled-components";
import logo from "../../images/logo.png"

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
      font-size: 30px;
      margin-bottom: 10px;
    }   
`;

function Logo () {
    return (
        <Title>
          <img src={logo} alt="logo"/>
        </Title>
    )
}

export default Logo;