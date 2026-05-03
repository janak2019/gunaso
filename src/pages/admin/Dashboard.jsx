import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Complaints() {
  const [complaints, setComplaints] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchComplaints();
    fetchStaffs();
  }, []);

  const fetchComplaints = async () => {
    const res = await API.get("/complaints");
    setComplaints(res.data);
  };

  const fetchStaffs = async () => {
    const res = await API.get("/users/staff");
    setStaffs(res.data);
  };

  // 🔍 FILTER LOGIC
  const filtered = complaints.filter((c) => {
    if (filter === "All") return true;
    if (filter === "Unassigned") return !c.assigned_to;
    if (filter === "Assigned") return c.assigned_to;
    if (filter === "Resolved") return c.status === "Resolved";
    return true;
  });

  return (
    <div className="space-y-4">

      {/* HEADER + FILTER */}
      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">Complaints</h2>

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Unassigned">Unassigned</option>
          <option value="Assigned">Assigned</option>
          <option value="Resolved">Resolved</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Assigned Staff</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t">

                <td className="p-3">{c.id}</td>
                <td className="p-3">{c.mobile}</td>
                <td className="p-3">{c.type}</td>

                {/* STATUS */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      c.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                {/* 👇 SHOW STAFF NAME */}
                <td className="p-3">
                  {c.staff_mobile ? (
                    <span className="text-blue-600 font-medium">
                      {c.staff_mobile}
                    </span>
                  ) : (
                    <span className="text-gray-400">Unassigned</span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}