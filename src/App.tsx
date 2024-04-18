import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Tickets from './components/Tickets/Tickets';
import Profile from './components/Profile/Profile';


function App(){


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/tickets" Component={Tickets} />
          <Route path="/profile/:id" Component={Profile} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;
