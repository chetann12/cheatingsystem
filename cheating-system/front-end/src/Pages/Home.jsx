import { Link } from "react-router-dom";
import CheatingRecordList from "../Components/CheatingRecordList";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 font-sans">
          Academic Integrity & Cheating Record System
        </h1>

        <Link to="/login">
          <button className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition">
            Admin Login
          </button>
        </Link>

        <div className="mt-6">
          <CheatingRecordList />
        </div>
      </div>
    </div>
  );
}

export default Home;
