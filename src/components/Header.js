import { useState } from "react";
import Logo from "../utils/logo.png";
const Header = () => {

    let btnName = "Login";
    const [btnNameReact, setBtnName] = useState("Login");
    return (
        <div className="head-container">
            <div className="img-container">
                <img alt="logo" src={Logo}></img>
            </div>
            <div className="links-container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <button className="login-btn"
                    onClick={() => { setBtnName("Logout") }}>
                    {btnNameReact}
                </button>
            </div>
        </div>
    );
};
export default Header;