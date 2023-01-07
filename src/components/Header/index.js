import {Link} from "react-router-dom";
import {ThemeSwitch} from "../ThemeSwitcher";
import {Nav} from "./styles";
import {FormattedMessage} from "react-intl";

const Header = () => {
    return (
        <div>
            <Nav>
                <ul>
                    <li>
                        <Link to="/">
                            <FormattedMessage id="menu.home"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <FormattedMessage id="menu.settings"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/statistics">
                            <FormattedMessage id="menu.statistics"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <FormattedMessage id="menu.about"/>
                        </Link></li>
                </ul>
            </Nav>
            <ThemeSwitch/>
        </div>
    )
}

export default Header