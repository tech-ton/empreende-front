import styled from "styled-components";
import { Link } from "react-router-dom";
import estoqueimage from "../../images/estoque.png"
import menu from "../../images/menu.png"
import relatorio from "../../images/relatorio.png"
import ajuda from "../../images/ajuda.png"

const Icons = styled.aside`
    position: absolute;
    top: 190px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        position: fixed;
        top: auto;
        bottom: 20px;
        left: 10px;
        flex-direction: row;
        justify-content: space-between;
        width: 95%;
    }
`;

const ImageIcon = styled.img`
    &:hover {
        background-color: #0050b3;
    }

    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;


export default function Menu () {
    return (
        <Icons>
            <Link to="/configuracoes"><ImageIcon src={menu} alt="menu" width="70" height="70"/></Link>
            <Link to="/estoque"><ImageIcon src={estoqueimage} alt="estoque" width="70" height="70"/></Link>
            <Link to="/relatorio"><ImageIcon src={relatorio} alt="relatorio" width="70" height="70"/></Link>
            <Link to="/home"><ImageIcon src={ajuda} alt="ajuda" width="70" height="70"/></Link>
        </Icons>
    )
}