import s from './Hero.module.scss';
import Button from "@/components/ui/Button/Button.jsx";
import {useNavigate} from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()
    const claim = () => {
        navigate('/claim')
    }

    return (
        <div className="container">
            <div className={s.hero}>
                <h1 className={s.title}>777% monthly income</h1>
                <p className={s.text}>Get money in a couple of clicks and stop thinking about poverty</p>
                <div className={s.btnBlock}>
                    <Button>Stake</Button>
                    <Button onClick={claim} type="transparent">Claim</Button>
                </div>

                <ul className={s.advantagesList}>
                    <li className={s.listItem}>
                        <h3 className={s.listItemTitle}>120%</h3>
                        <p className={s.listItemText}>Get money in a couple of clicks and stop thinking about
                            poverty</p>
                    </li>
                    <li className={s.listItem}>
                        <h3 className={s.listItemTitle}>150k</h3>
                        <p className={s.listItemText}>Get money in a couple of clicks and stop thinking about
                            poverty</p>
                    </li>
                    <li className={s.listItem}>
                        <h3 className={s.listItemTitle}>320 new</h3>
                        <p className={s.listItemText}>Get money in a couple of clicks and stop thinking about
                            poverty</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Hero;