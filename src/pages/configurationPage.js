import Logo from '../components/Logo';
import Menu from '../components/menu';
import UserConfiguration from '../components/userconfiguration';
import UserWithnotLogin from '../components/userWithnotLogin'

function ConfigurationPage() {
  const userToken = localStorage.getItem("token");
  if(userToken){
    return (
      <div>
        <Logo/>
        <Menu/>
        <UserConfiguration/>
      </div>
    );
  } else {
    return (<UserWithnotLogin/>);
  }
  
}

export default ConfigurationPage;
