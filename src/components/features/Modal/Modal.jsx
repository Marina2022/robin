import s from './Modal.module.scss';

const Modal = ({children}) => {
    return (
        <div className={s.underlay}>
            <div className={s.modal}>
                {children}
            </div>
        </div>
    );
};
export default Modal;