import TicketCollection from "./components/TicketCollection/TicketCollection";
import workers from "./assets/WorkerData/WorkerData";





const CardRender = () => {
    return (
        <div>
            <TicketCollection WorkerCardArray={workers} />
        </div>
    );
};

export default CardRender;
