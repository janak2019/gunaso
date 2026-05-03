import { useEffect, useState } from "react";
import API from "../../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const nepalMobileRegex = /^(98|97|96)\d{8}$/;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users?role=staff");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Create Staff
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!mobile) {
      setError("मोबाइल नम्बर आवश्यक छ");
      return;
    }

    if (!nepalMobileRegex.test(mobile)) {
      setError("वैध मोबाइल नम्बर हाल्नुहोस्");
      return;
    }

    try {
      await API.post("/users", {
        mobile,
        role: "staff",
      });

      setMobile("");
      setError("");
      fetchUsers();
    } catch (err) {
      console.error(err);
      setError("User create गर्न सकेन");
    }
  };

  return (
    <div className="space-y-6">

      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-gray-700">
          कर्मचारि व्यवस्थापन
        </h2>
        <p className="text-sm text-gray-500">
          नयाँ staff थप्नुहोस्
        </p>
      </div>

      {/* 🔥 Create Form */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row gap-3"
      >
        <input
          type="tel"
          placeholder="98XXXXXXXX"
          maxLength={10}
          className="border p-3 rounded-lg flex-1"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        <button className="bg-blue-600 text-white px-6 rounded-lg">
          Add Staff
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">

                <td className="p-3">#{user.id}</td>

                <td className="p-3">{user.mobile}</td>

                <td className="p-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    {user.role}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={async () => {
                      await API.delete(`/users/${user.id}`);
                      fetchUsers();
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
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