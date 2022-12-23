import {Link} from "react-router-dom";
import {Nav} from "./styles";

const Header = () => {
    return (
        <Nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li><Link to="/about">about</Link></li>
            </ul>
        </Nav>
    )
}

export default Header