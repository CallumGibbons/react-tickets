import WorkerCard from "../Worker/Worker";
import './TicketCollection.css';

const TicketCollection = (props: any) => {
    const { WorkerCardArray } = props;

    const WorkerCards = WorkerCardArray.map((worker: any, i: number) => (
        <div className="worker-card-container" key={i}>
            <WorkerCard
                name={worker.name}
                position={worker.position}
                className="worker-card"
            />
        </div>   
    ));

    return <div className="ticket-collection">{WorkerCards}</div>;
};

export default TicketCollection;