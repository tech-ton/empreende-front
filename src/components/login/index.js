import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  margin-top: 25vh;

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
    const navigate = useNavigate();

    const handleLogin = (event) => {
        navigate("/home");
        event.preventDefault();
    }
    return (
    <Container>
        <LoginBox>
        <Title src={logo} alt="logo"/>
            <Form onSubmit={handleLogin}>
                <Button type="submit">Iniciar</Button>
            </Form>
      </LoginBox>
    </Container>
    )
}

export default Login