import WorkerCard from "../Worker/Worker";
import { Link } from 'react-router-dom';
import './TicketCollection.css';

const TicketCollection = (props: any) => {
    const { WorkerCardArray } = props;

    const WorkerCards = WorkerCardArray.map((worker: any, i: number) => (
        <div className="worker-card-container" key={i}>
            <WorkerCard
                name={<li key={worker.id}>
                <Link to={`/profile/${worker.id}`}>{worker.name}</Link>
              </li>}
                position={worker.position}
                className="worker-card"
            />
        </div>   
    ));

    return <div className="ticket-collection">{WorkerCards}</div>;
};

export default TicketCollection;