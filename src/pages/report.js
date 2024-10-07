import Logo from "../components/Logo";
import Menu from "../components/menu"
import ReportAcess from "../components/reportAcess";
import UserWithnotLogin from "../components/userWithnotLogin";

export default function Report () {
    const userData = localStorage.getItem("userData");
    const userDataBusiness = localStorage.getItem("userDataBusiness");
    if (userData && userDataBusiness){
        return (
            <div>
                <Logo/>
                <Menu/>
                <ReportAcess/>
            </div>
        )
    } else {
        return (<div>
            <Menu/>
            <UserWithnotLogin/>
        </div>)
    }
    
}