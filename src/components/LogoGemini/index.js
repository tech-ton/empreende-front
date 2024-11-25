import styled from "styled-components";
import logo from "../../images/gemini_ia.png"

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    img {
        width: 13%;
        font-size: 30px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
            width: 30%;
        }
    }
`;


function LogoGemini () {
    return (
        <Title>
            <h1>Inteligência Artificial </h1>
            <img src={logo} alt="logo_Gemini_ia"/>
        </Title>
    )
}

export default LogoGemini;