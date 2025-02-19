import { useEffect, useState } from "react";
import axios from "axios";
import AdminPanel from "../Components/AdminPanel";

function AdminDashboard() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/records")
      .then((res) => setRecords(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AdminPanel setRecords={setRecords} />
      <h2>Cheating Records</h2>
      {records.map((record) => (
        <div key={record._id}>
          <h4>{record.studentName}</h4>
          <p>{record.reason}</p>
          <img src={record.proofURL} alt="Proof" width="100" />
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
