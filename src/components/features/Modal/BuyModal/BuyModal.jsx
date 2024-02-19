import s from './BuyModal.module.scss';
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

const BuyModal = () => {

    const [EthValue, setEthValue] = useState('')
    const EthInputHandler = (e) => {
        setEthValue(e.target.value)
    }

    const [BSQValue, setBSQValue] = useState('')
    const BSQInputHandler = (e) => {
        setBSQValue(e.target.value)
    }

    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }

    return (
        <Modal classname={s.buyModal}>
            <BuyStakingSwitch on='buy'/>
            <ModalTitle classname={s.title}>
                Clame token on your wallet
            </ModalTitle>
            <p className={s.subtitle}>Trade tokens in an instant</p>

            <div className={s.coinTitle}>
                <img src={Eth} alt="Eth"/>
                <div>ETH</div>
            </div>
            <Input placeholder="text" value={EthValue} onChange={EthInputHandler}/>
            <div className={s.price}>$260</div>

            <div className={s.btnWrap}>
                <button className={s.downBtn}>
                    <img src={downBtn} alt="down button"/>
                </button>
            </div>

            <div className={s.coinTitle}>
                <img src={BSQ} alt="BSQ"/>
                <div>BSQ</div>
            </div>
            <Input placeholder="text" value={BSQValue} onChange={BSQInputHandler}/>
            <div className={s.price}>$260</div>

            <Button classname={s.greenBtn} type='green'>Buy token</Button>
            <Button onClick={backHandler} type='transparent'>Back</Button>
        </Modal>
    );
};

export default BuyModal;