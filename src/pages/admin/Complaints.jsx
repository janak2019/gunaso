import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔥 Fetch from backend
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints");
      setComplaints(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Data load गर्न सकेन");
      setLoading(false);
    }
  };

  // 🔍 Filter
  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((c) => c.status === filter);

  return (
    <div className="space-y-4">

      {/* Title + Filter */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-700">
          Complaints List
        </h2>

        <select
          className="border p-2 rounded-lg"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Table */}
      {!loading && !error && (
        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Mobile</th>
                <th className="p-3">Type</th>
                <th className="p-3">Description</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredComplaints.map((c) => (
                <tr key={c.id} className="border-t">

                  <td className="p-3">#{c.id}</td>

                  <td className="p-3">{c.mobile}</td>

                  <td className="p-3">{c.type}</td>

                  <td className="p-3 max-w-xs truncate">
                    {c.description}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded font-semibold ${
                        c.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {c.status}
                    </span>
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