import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataLogin from "../../data/user-login.json";

const Container = styled.div`
    text-align: center;
    
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (event) => {
        if (dataLogin[0].email === email && dataLogin[0].password === password){
            localStorage.setItem('token', JSON.stringify({token: "A1bC3dE5fG7hI9jK0lM"}));
            navigate("/home");
        } else {
            alert("Email ou senha inválidos!");
        }
        event.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleLogin}>
                <label for="email">E-mail:</label>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Insira seu e-mail"
                />

                <label for="password">Senha:</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Insira sua senha"
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </Container>
    )
}

export default Login