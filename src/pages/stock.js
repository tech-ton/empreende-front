import Logo from '../components/Logo';
import Menu from '../components/menu';
import StockAcess from '../components/stockAcess';
import UserWithnotLogin from '../components/userWithnotLogin'

function Stock() {
  const userToken = localStorage.getItem("token");
  if (userToken){
    return (
      <div>
        <Logo/>
        <Menu/>
        <StockAcess/>
      </div>
    );
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default Stock;
