export default function AdminDashboard() {
  return (
    <div className="space-y-4">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p>Total Complaints</p>
          <h2 className="text-2xl font-bold">120</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-yellow-500">Pending</p>
          <h2 className="text-2xl font-bold">30</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-green-600">Resolved</p>
          <h2 className="text-2xl font-bold">90</h2>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">#101</td>
              <td className="p-3">9841234567</td>
              <td className="p-3">उजुरी</td>
              <td className="p-3 text-yellow-600">Pending</td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}