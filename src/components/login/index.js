import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dataLogin from "../../data/user-login.json";
import logo from "../../images/logo.png"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  align-items: center;
  text-align: center;
  margin-top: 15vh;

  @media (max-width: 768px) {
    width: 80%; /* Ocupa 90% da largura da tela no mobile */
    margin-top: 0px;
  }
`;

const Title = styled.img`
  width: 80%;
  height: 80%;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 5px;
  text-align: left;
`;

const Input = styled.input`
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px; /* Ajusta o tamanho da fonte no mobile */
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 25px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #9bbdf7;
  width: 100px;
  margin-left: 150px;

  &:hover {
    background-color: #82a3e6;
  }

  @media (max-width: 768px) {
    margin-left: 35%;
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
    <Container>
        <LoginBox>
        <Title src={logo} alt="logo"/>
            <Form onSubmit={handleLogin}>
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
            </Form>
      </LoginBox>
    </Container>
    )
}

export default Login