import s from './Header.module.scss'
import logo from '@/assets/img/logo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <Link to="/">
                <img src={logo} alt=""/>
            </Link>
        </header>
    );
};

export default Header;