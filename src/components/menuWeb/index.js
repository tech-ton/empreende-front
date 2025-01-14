import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"


const ListaUl = styled.ul`
    margin-top: -70px;
    padding: 0;
    list-style: none;
    text-align: right;
`;

const ListaLi = styled.li`
    margin-left: 20px;
    margin-right: 20px;
    display: inline-block;
    font-size: 16px;
    border: 1px solid #3E5066;
    border-radius: 15px;
    padding: 10px;

    &:hover {
        background-color: #090a90;
    }
`;


const Container = styled.div`
    color: #fff;
    font-family: Roboto;

    @media (max-width: 768px) {
            display:none;
        }
`;

const Titulo = styled.img`
    padding: 10px;
    width: 20%;
    height: 20%;
    margin-bottom: 0px;
`;


export default function MenuWeb () {
    const listaItens = [
        {text: "Pagina Principal", url: "/home"},
        {text: "Relatórios", url: "/relatorio"},
        {text: "Estoque", url: "/estoque/categorias"},
        {text: "Compras", url: "/compras"},
        {text: "Configurações", url: "/configuracoes"}
    ]
    
    return(
        <Container>
            <Titulo src={logo} alt="logo"/>
            <ListaUl>
                {listaItens.map((item, index) => (
                    <ListaLi key={index}>
                        <Link to={item.url} style={{textDecoration: "none", color: "#fff"}}>{item.text}</Link>
                    </ListaLi>
                ))}
            </ListaUl>
        </Container>
        )
}