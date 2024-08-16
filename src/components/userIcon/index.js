import styled from "styled-components"
import perfilicon from "../../images/icone-perfil.png"

const UserInfo = styled.div`
    position: absolute;
    top: 150px;
    right: 150px;
    display: flex;
    flex-direction: column;
    align-items: center

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
`;

const UserName = styled.div`
  font-size: 1.2em;
`;

export default function UserIcon () {
    return (
        <UserInfo>
            <img src={perfilicon} alt="perfil-icon"/>
            <UserName>SHEILA</UserName>
        </UserInfo>
    )
}