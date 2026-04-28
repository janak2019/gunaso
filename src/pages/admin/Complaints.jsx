import { useState } from "react";

export default function Complaints() {
  const [complaints, setComplaints] = useState([
    {
      id: 101,
      mobile: "9841234567",
      type: "उजुरी",
      description: "सडक बिग्रिएको छ",
      status: "Pending",
    },
    {
      id: 102,
      mobile: "9812345678",
      type: "सुझाव",
      description: "नयाँ बत्ती जडान गर्नुपर्छ",
      status: "Resolved",
    },
  ]);

  // 🔄 Change Status
  const toggleStatus = (id) => {
    const updated = complaints.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "Pending" ? "Resolved" : "Pending",
          }
        : item
    );
    setComplaints(updated);
  };

  return (
    <div className="space-y-4">

      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          Complaints Management
        </h2>
        <p className="text-sm text-gray-500">
          सबै गुनासोहरूको व्यवस्थापन
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Type</th>
              <th className="p-3">Description</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c.id} className="border-t">

                <td className="p-3">#{c.id}</td>

                <td className="p-3">{c.mobile}</td>

                <td className="p-3">{c.type}</td>

                <td className="p-3 max-w-xs truncate">
                  {c.description}
                </td>

                {/* Status */}
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

                {/* Actions */}
                <td className="p-3 space-x-2">

                  <button
                    onClick={() => toggleStatus(c.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Toggle
                  </button>

                  <button className="bg-gray-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}