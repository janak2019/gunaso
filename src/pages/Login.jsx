import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-blue-700">
            डिजिटल गुनासो प्रणाली
          </h2>
          <p className="text-sm text-gray-500">
            Admin Login
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded mt-1"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              required
              className="w-full p-2 border rounded mt-1"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Secure Government System
        </p>

      </div>

    </div>
  );
}