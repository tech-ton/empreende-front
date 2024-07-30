import styled from "styled-components"
import iconeperfil from "../../images/icone-perfil.png"
import { Link } from "react-router-dom"

const Container = styled.div`
    text-align: center;

    img{
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    
    h1 { 
            width: 100%;
            font-size: 30px;
            margin-bottom: 50px;
            background-image: linear-gradient(to right, transparent, 50%, #f0f0f0, 100%, #050a30);
            text-align: center;
            padding: 60px 0px;
        }

    label {
        color: #ffffff;
        display: block;
        margin-bottom: 5px;
    }

    input[type="email"],
    input[type="password"] {
        width: 50%;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    button[type="submit"] {
        padding: 10px 30px;
        background-color: #fffff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`

function Login () {
    return (
        <Container>
            <h1>Login <img src={iconeperfil} alt="iconeperfil"/></h1>
            
            <form action="#">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Insira seu e-mail"/>

                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Insira sua senha"/>
                <br/>
                <Link to="/home"><button type="submit">Login</button></Link>
            </form>
        </Container>
    )
}

export default Login