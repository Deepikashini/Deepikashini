import login_page from "../../assets/images/login_page.jpg";
// import "./Styles.css";
import Example from "./Form";

const Login = () => {
    return(
        <div className="login_container">
            <div>
                <img className="login-img h-screen" src={login_page} alt="login-image"/>
            </div>
            <div>
                <h1 className="login-form">Foodie</h1>
                
                <Example />

            </div>
        </div>
    );
};

export default Login;