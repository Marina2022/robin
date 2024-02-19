import s from './ClientCard.module.scss';

const ClientCard = ({client}) => {
    return (
        <li className={s.clientItem}>
            <div className={s.top}>
                <img className={s.ava} src={client.avatar} alt="avatar"/>

                <div>
                    <h3 className={s.title}>{client.title}</h3>
                    <p className={s.subtitle}>{client.subtitle}</p>
                </div>
            </div>
            <p className={s.text}>
                {client.text}
            </p>
            <span className={s.date}>{client.date}</span>
        </li>
    );
};

export default ClientCard;