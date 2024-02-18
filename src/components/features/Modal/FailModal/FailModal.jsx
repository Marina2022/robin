import s from './FailModal.module.scss';
import Button from "@/components/ui/Button/Button.jsx";
import Modal from "@/components/features/Modal/Modal.jsx";
import BSQIcon from '@/assets/img/BSQ.svg'
import {useNavigate} from "react-router-dom";

const ClaimModal = () => {

    const navigate = useNavigate()
    const backHandler = () => {
        navigate('/')
    }

    return (
        <Modal>
            <div className={s.top}>
                <div className={s.alloc}>
                    <div>Allocation</div>
                    <div className={s.number}>0</div>
                </div>
                <div className={s.rightPart}>
                    <img src={BSQIcon} alt="BSQ icon"/>
                    <div className={s.title}>BSQ</div>
                </div>
            </div>

            <div className={s.text}>
                <p>
                    Unfortunately, this Starknet wallet address is not eligible for this round of Provisions.
                </p>
                <p>
                    Please make sure you used the correct login method (all developers should use GitHub). Although you
                    are not eligible, you are invited to explore the Stark net ecosystem!
                </p>
            </div>

            <Button classname={s.greenBtn} type='green' classname={s.grBtn}>Disconnect</Button>
            <Button type='transparent' onClick={backHandler}>Back</Button>
        </Modal>
    );
};

export default ClaimModal;