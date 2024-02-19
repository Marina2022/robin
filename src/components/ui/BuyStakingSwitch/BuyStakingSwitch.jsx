import s from './BuyStakingSwitch.module.scss';
const BuyStakingSwitch = ({on='buy'}) => {

    return (
        <div className={s.wrapper}>
            <div className={`${s.division } ${on==='buy' ? s.active : ''}`}>Buy token</div>
            <div className={`${s.division } ${on==='staking' ? s.active : ''}`}>Staking</div>
        </div>
    );
};
export default BuyStakingSwitch;