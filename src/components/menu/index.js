import styled from "styled-components";
import { Link } from "react-router-dom";
import graficoimage from "../../images/grafico-de-barras.png"
import menu from "../../images/menu.png"
import robo from "../../images/robo.png"

const Icons = styled.aside`
    position: absolute;
    top: 190px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageIcon = styled.img`
    &:hover {
    background-color: #0050b3;
  }
`;

export default function Menu () {
    return (
        <Icons>
            <Link to="/configuracoes"><ImageIcon src={menu} alt="menu"/></Link>
            <Link to="/estoque"><ImageIcon src={graficoimage} alt="grafico"/></Link>
            <Link to="/home"><ImageIcon src={robo} alt="robo"/></Link>
        </Icons>
    )
}