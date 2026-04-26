import React from "react";

export default function GunasoUI() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold">गुनासो प्रणाली</h1>
        <div className="space-x-4">
          <button>गृहपृष्ठ</button>
          <button>गुनासो अवस्था</button>
          <button>लगइन</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold mb-4">
          डिजिटल गुनासो प्रणाली
        </h2>
        <p className="mb-6">
          नागरिकको आवाज, सरकारसम्म सहज पहुँच
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            गुनासो दर्ता गर्नुहोस्
          </button>
          <button className="bg-gray-300 px-6 py-2 rounded">
            ट्र्याक गर्नुहोस्
          </button>
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="grid md:grid-cols-4 gap-6 p-8">
        {["Total", "Pending", "In Progress", "Resolved"].map((item) => (
          <div key={item} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">{item}</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        ))}
      </section>

      {/* Complaint Table */}
      <section className="p-8">
        <h3 className="text-xl font-bold mb-4">Complaints</h3>
        <table className="w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center border-t">
              <td className="p-3">#123</td>
              <td>Ram Bahadur</td>
              <td>Road</td>
              <td>Pending</td>
              <td>
                <button className="text-blue-600">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </div>
  );
}