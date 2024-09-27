import Logo from "../components/Logo";
import Menu from "../components/menu";
import BootAssistent from "../components/bootAssistent";
import UserWithnotLogin from "../components/userWithnotLogin";
import Business from "../components/userBussiness";

function Home() {
  const userToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  if (userToken){
    if (userData) {
      return(
        <div>
          <Logo/>
          <Menu/>
          <BootAssistent/>
        </div>
      );
    } else {
      return(
        <div>
          <Logo/>
          <Menu/>
          <Business/>
        </div>
      )
    }
     
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default Home;