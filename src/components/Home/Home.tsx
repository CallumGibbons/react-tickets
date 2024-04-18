import { Link } from 'react-router-dom';
import team from '../../assets/WorkerData/WorkerData';

const Home = () => {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {team.map(worker => (
          <li key={worker.id}>
            <Link to={`/profile/${worker.id}`}>{worker.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;