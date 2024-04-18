import { useParams } from 'react-router-dom';
import team from '../../assets/WorkerData/WorkerData';
import "./Profile.css"

const Profile = () => {
  // Get the member ID from URL parameters
  const { id } = useParams();

  // Parse the ID to integer or default to 0 if undefined
  const workerId = parseInt(id || "0", 10);

  // Find the team member with the matching ID
  const worker = team.find(worker => worker.id === workerId);

  // If member is not found, display a message
  if (!worker) {
    return <div>Member not found</div>;
  }

  return (
    <div className='profile-container'>
      <h2>Profile: {worker.name}</h2>
      <img src={worker.profile.profilePicture} className='profile-image'/>
      <div className='profile-info'>
      <p>Name: {worker.name}</p>
      <p>Position: {worker.role}</p>
      <p>Department: {worker.profile.department}</p>
      <p>TechStack: {worker.profile.techstack.join(", ")}</p>
      <p>Experience: {worker.profile.experience}</p>
      </div>
    </div>
  );
};

export default Profile;