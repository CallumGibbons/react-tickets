
import team from '../../assets/WorkerData/WorkerData';
import TicketCollection from '../TicketCollection/TicketCollection';


const Tickets = () => {
  return (
      <div>
          <TicketCollection WorkerCardArray={team} />
      </div>
  );}

export default Tickets;
