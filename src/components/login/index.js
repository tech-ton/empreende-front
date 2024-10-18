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
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-left: 3%;
  color: #fff;
  background-color: #050a30;
  border: 1px solid #3E5066;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const Button = styled.button`
  right: 10px;
  bottom: 10px;
  width: 150px;
  margin-left: 30%;
  background-color: #050a30;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 1px solid #3E5066;
  border-radius: 15px;

  &:hover {
    background-color: #090a90;
  }

  @media (max-width: 768px) {
    
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