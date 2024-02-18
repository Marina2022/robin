import s from './ModalTitle.module.scss';

const ModalTitle = ({classname, children}) => {
    return (
        <h1 className={s.title + ' ' + classname}>
            {children}
        </h1>
    );
};

export default ModalTitle;