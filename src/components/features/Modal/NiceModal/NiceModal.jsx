import s from './NiceModal.module.scss';
import Modal from "@/components/features/Modal/Modal.jsx";
import ClaimModal from "@/components/features/Modal/ClaimModal/ClaimModal.jsx";
import ModalTitle from "@/components/ui/ModalTitle/ModalTitle.jsx";
import Button from "@/components/ui/Button/Button.jsx";

const NiceModal = () => {
    return (
        <>

                <ClaimModal/>


                <div className={s.overlay}>
                </div>
                    <Modal>
                        <ModalTitle>You have received 50 tokens</ModalTitle>
                        <Button type="green">Nice</Button>
                    </Modal>
            </>
            );
            };

            export default NiceModal;