import Logo from "../components/Logo";
import Menu from "../components/menu";
import StockShop from "../components/shopping";
import UserWithnotLogin from '../components/userWithnotLogin';


function ShoppingList () {
  const userToken = localStorage.getItem("token");
  if (userToken){
    return (
      <div>
        <Logo/>
        <Menu/>
        <StockShop/>
      </div>
    );
  } else {
    return (<UserWithnotLogin/>)
  }
  
};

export default ShoppingList;
