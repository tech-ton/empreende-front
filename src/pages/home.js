import Logo from "../components/Logo";
import Menu from "../components/menu";
import BootAssistentRecord from "../components/bootAssistentRecord";
import UserWithnotLogin from "../components/userWithnotLogin";
import LogoGemini from "../components/LogoGemini";
import NewUserWellcome from "../components/newUser";

function Home() {
  const userToken = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");
  const userDataBusiness = localStorage.getItem("userDataBusiness");
  if (userToken){
    if (userData && userDataBusiness) {
      return(
        <div>
          <LogoGemini/>
          <Menu/>
          <BootAssistentRecord/>
        </div>
      );
    } else {
      return(
        <div>
          <Logo/>
          <Menu/>
          <NewUserWellcome/>
        </div>
      )
    }
     
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default Home;