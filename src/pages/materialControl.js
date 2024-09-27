import Logo from "../components/Logo";
import Menu from "../components/menu";
import UserMaterials from "../components/userMaterials";
import UserWithnotLogin from '../components/userWithnotLogin'

export default function Inventory () {
  const userToken = localStorage.getItem("token");
  if (userToken){
    return (
      <div>
        <Logo/>
        <Menu/>
        <UserMaterials/>
      </div>
    );
  } else {
    return(<UserWithnotLogin/>);
  }
  
};
