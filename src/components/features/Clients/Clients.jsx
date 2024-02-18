import s from './Clients.module.scss';
import {mockClients} from '@/data/mockClients';
import ClientCard from "@/components/features/Clients/ClientCard/ClientCard.jsx";

const Clients = () => {
    return (
        <div className={s.clients}>
            <div className="container">
                <h2 className={s.title}>Clients</h2>

                <ul className={s.clientList}>
                    {
                        mockClients.map((client, index) => {
                            return <ClientCard key={index} client={client}/>
                        })
                    }

                </ul>
            </div>
        </div>
    );
};

export default Clients;