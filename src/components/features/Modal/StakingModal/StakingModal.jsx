import s from './StakingModal.module.scss';
import ModalTitle from "@/components/ui/ModalTitle/ModalTitle.jsx";
import Input from "@/components/ui/Input/Input.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import Modal from "@/components/features/Modal/Modal.jsx";
import BuyStakingSwitch from "@/components/ui/BuyStakingSwitch/BuyStakingSwitch.jsx";
import Eth from '@/assets/img/Eth.svg'
import BSQ from '@/assets/img/BSQ.svg'
import downBtn from '@/assets/img/downBtn.svg'
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const StakingModal = () => {


    const [stakingValue, setStakingValue] = useState('')
    const stakingInputHandler = (e) => {
        setStakingValue(e.target.value)
    }

    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }

    return (
        <Modal>
            <BuyStakingSwitch on='staking'/>
            <ModalTitle classname={s.title}>
                Staking of BSQ
            </ModalTitle>
            <p className={s.subtitle}>Trade tokens in an instant</p>
            <p className={s.amount}>The amount of stacking</p>

            <div className={s.inputWrapper}>
                <Input placeholder="text" value={stakingValue} onChange={stakingInputHandler}/>
                <div className={s.inputLabel}>BSQ <span className={s.highlight}>Max</span></div>
            </div>

            <div className={s.balance}>
                <div className={s.balanceText}>Available balance</div>
                <div className={s.balanceValue}>1500 BSQ</div>
            </div>

            <div className={s.reward}>
                <div className={s.rewardText}>The reward for the month</div>
                <div className={s.rewardValue}>500 BSQ</div>
            </div>


            <Button classname={s.greenBtn} type='green'>Stacking</Button>
            <Button onClick={backHandler} type='transparent'>Back</Button>
        </Modal>
    );
};

export default StakingModal;