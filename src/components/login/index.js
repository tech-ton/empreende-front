import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataLogin from "../../data/user-login.json";
import logo from "../../images/logo.png"

const ContainerE = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: auto;

  @media (max-width: 768px) {
        height: 50vh;
    }
`;

const Left = styled.div`
    padding: 40px;
    max-width: 400px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Title = styled.img`
    width: 100%;
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Description = styled.p`
    font-size: 24px;
    color: #fff;
`;

const Right = styled.div`
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);
  width: 300px;
`;

const Label = styled.label`
    color: #ffffff;
    display: block;
    margin-bottom: 5px;
`

const Input = styled.input`
    width: 90%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    right: 10px;
    bottom: 10px;
    background-color: #9bbdf7;
    color: #0a1a42;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #82a3e6;
    }

    @media (max-width: 768px) {
        font-size: 0.9em;
        padding: 8px 18px;
    }
`;


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
        <ContainerE>
            <Left>
                <Title src={logo} alt="logo"/>
                <Description>
                Onde suas ideias ganham vida com a tecnologia!
                </Description>
            </Left>
            <Right>
                <form onSubmit={handleLogin}>
                    <Label for="email">E-mail:</Label>
                    <Input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Insira seu e-mail"
                    />

                    <Label for="password">Senha:</Label>
                    <Input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Insira sua senha"
                    />
                    <br/>
                    <Button type="submit">Login</Button>
                </form>
            </Right>
        </ContainerE>
    )
}

export default Login