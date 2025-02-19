import { useState } from "react";
import axios from "axios";

function AdminPanel({ setRecords }) {
  const [studentName, setStudentName] = useState("");
  const [reason, setReason] = useState("");
  const [proofURL, setProofURL] = useState("");

  const handleAddRecord = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/records/add",
        { studentName, reason, proofURL },
        { headers: { Authorization: token } }
      );
      setRecords((prev) => [res.data.record, ...prev]);
      setStudentName("");
      setReason("");
      setProofURL("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Cheating Record</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Reason"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <input
        type="text"
        placeholder="Proof URL"
        value={proofURL}
        onChange={(e) => setProofURL(e.target.value)}
      />
      <button onClick={handleAddRecord}>Add Record</button>
    </div>
  );
}

export default AdminPanel;
