import s from './Header.module.scss'
import logo from '@/assets/img/logo.svg'
const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>
        </header>
    );
};

export default Header;