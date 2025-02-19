import { Link } from "react-router-dom";
import CheatingRecordList from "../Components/CheatingRecordList";

function Home() {
  return (
    <div>
      <h1>Academic Integrity & Cheating Record System</h1>

      <Link to="/login">
        <button>Admin Login</button>
      </Link>
      <CheatingRecordList />
    </div>
  );
}

export default Home;
