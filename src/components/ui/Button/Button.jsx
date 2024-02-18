import s from './Button.module.scss';
const Button = ({type='green', children, onClick, classname}) => {

    let btnClass =  s.btn
    if (type === 'green') btnClass+= ' ' + s.green + ' ' + classname
    if (type === 'darkGreen') btnClass+= ' ' + s.darkGreen + ' ' + classname
    if (type === 'transparent') btnClass+= ' ' + s.transparent + ' ' + classname

    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;