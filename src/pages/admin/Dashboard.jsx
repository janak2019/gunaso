import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📥 Load data from backend
  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints");
      setComplaints(res.data);
    } catch (err) {
      console.error("Error fetching complaints", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // 🔄 Update status
  const updateStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Resolved" : "Pending";

    try {
      await API.put(`/complaints/${id}`, {
        status: newStatus,
      });

      // update UI without reload
      setComplaints((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold">Complaints</h2>

      {/* Loading */}
      {loading ? (
        <p>Loading...</p>
      ) : (

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((c) => (
                <tr key={c.id} className="border-t">

                  <td className="p-3">{c.id}</td>
                  <td className="p-3">{c.mobile}</td>
                  <td className="p-3">{c.type}</td>

                  <td className="p-3 max-w-xs truncate">
                    {c.description}
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        c.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-3">
                    <button
                      onClick={() => updateStatus(c.id, c.status)}
                      className="bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Toggle
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      )}

    </div>
  );
}