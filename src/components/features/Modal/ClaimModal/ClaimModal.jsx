import s from './ClaimModal.module.scss';
import Input from "@/components/ui/Input/Input.jsx";
import Button from "@/components/ui/Button/Button.jsx";
import {useState} from "react";
import ModalTitle from "@/components/ui/ModalTitle/ModalTitle.jsx";
import Modal from "@/components/features/Modal/Modal.jsx";

const ClaimModal = () => {

    const [value, setValue] = useState('')
    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <Modal>
            <ModalTitle >
                Claim token on your wallet
            </ModalTitle>
            <p className={s.subtitle}>Enter your wallet</p>
            <Input placeholder="text" value={value} onChange={inputHandler}/>
            <Button classname={s.greenBtn} type='green'>Claim token</Button>
            <Button type='transparent'>Claim token</Button>
        </Modal>
    );
};

export default ClaimModal;