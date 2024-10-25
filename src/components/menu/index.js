import styled from "styled-components";
import { Link } from "react-router-dom";
import estoqueimage from "../../images/estoque.png"
import menu from "../../images/menu.png"
import relatorio from "../../images/relatorio.png"
import ajuda from "../../images/ajuda.png"

const Icons = styled.aside`
    display: none;
    position: absolute;
    top: 160px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        display: flex;
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
    margin-bottom: 20px;
    display: none;
    
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        display: flex;
        width: 40px;
        height: 40px;
        margin-bottom: 0px;
    }
`;


export default function Menu () {
    return (
        <Icons>
            <Link to="/configuracoes" title="Configurações"><ImageIcon src={menu} alt="menu" width="70" height="70"/></Link>
            <Link to="/estoque/categorias" title="Estoque"><ImageIcon src={estoqueimage} alt="estoque" width="70" height="70"/></Link>
            <Link to="/relatorio" title="Relatórios"><ImageIcon src={relatorio} alt="relatorio" width="70" height="70"/></Link>
            <Link to="/home" title="Página Principal"><ImageIcon src={ajuda} alt="ajuda" width="70" height="70"/></Link>
        </Icons>
    )
}