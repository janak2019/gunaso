import { useState } from "react";

export default function Users() {
  const [users] = useState([
    {
      id: 1,
      name: "Ram Bahadur",
      mobile: "9841234567",
      status: "Active",
    },
    {
      id: 2,
      name: "Sita Sharma",
      mobile: "9812345678",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Hari Karki",
      mobile: "9861234567",
      status: "Active",
    },
  ]);

  return (
    <div className="space-y-4">

      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          Users Management
        </h2>
        <p className="text-sm text-gray-500">
          सबै प्रयोगकर्ताहरूको विवरण
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">

                <td className="p-3">#{user.id}</td>

                <td className="p-3 font-medium">
                  {user.name}
                </td>

                <td className="p-3">
                  {user.mobile}
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-3 space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
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