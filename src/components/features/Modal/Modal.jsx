import s from './Modal.module.scss';

const Modal = ({children, classname}) => {
    return (
        <div className={s.underlay}>
            <div className={`${s.modal} ${classname}`}>
                {children}
            </div>
        </div>
    );
};
export default Modal;