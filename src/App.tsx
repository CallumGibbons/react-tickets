import TicketCollection from "./components/TicketCollection/TicketCollection";
import workers from "./assets/WorkerData/WorkerData";





const App = () => {
    return (
        <div>
            <TicketCollection WorkerCardArray={workers} />
        </div>
    );
};

export default App;
