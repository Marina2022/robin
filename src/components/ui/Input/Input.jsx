import s from './Input.module.scss';
const Input = ({onChange, value, placeholder}) => {
    return (
        <input className={s.input} onChange={onChange} value={value} placeholder={placeholder} />
    );
};

export default Input;