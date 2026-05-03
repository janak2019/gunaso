import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });

  const fetchStats = async () => {
    try {
      const res = await API.get("/complaints/stats");
      setStats(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
  className={`
    fixed md:static z-50
    top-0 left-0 h-screen w-48
    bg-blue-700 text-white
    transform transition-transform duration-300
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0
    flex flex-col
  `}
>

  {/* TOP - TITLE */}
  <Link
    to="/admin"
    className="block p-4 text-xl font-bold border-b border-blue-500 hover:bg-blue-600"
  >
    Admin Panel
  </Link>

  {/* MENU */}
  <nav className="p-4 space-y-3 flex-1">
    <Link
      to="/admin/dashboard"
      className="block hover:bg-blue-600 p-2 rounded"
      onClick={() => setMenuOpen(false)}
    >
      Dashboard
    </Link>

    <Link
      to="/admin/complaints"
      className="block hover:bg-blue-600 p-2 rounded"
      onClick={() => setMenuOpen(false)}
    >
      Complaints
    </Link>

    <Link
      to="/admin/users"
      className="block hover:bg-blue-600 p-2 rounded"
      onClick={() => setMenuOpen(false)}
    >
      Users
    </Link>
  </nav>

  {/* 🔥 LOGOUT (BOTTOM FIXED) */}
  <div className="p-4 border-t border-blue-500 mt-auto">
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded"
    >
      Logout
    </button>
  </div>

</aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* TOPBAR */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <h1 className="font-bold text-gray-700">Dashboard</h1>

          <span className="text-sm text-gray-500">Welcome Admin</span>
        </header>

        {/* CONTENT */}
        <main className="p-3 md:p-4 flex-1 space-y-4">

          <Outlet />

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

            {loading ? (
              <p className="col-span-3 text-center">Loading...</p>
            ) : (
              <>
                <div className="bg-white p-4 rounded-xl text-center shadow">
                  <p className="text-sm text-gray-500">कुल</p>
                  <h3 className="font-bold text-lg">{stats.total}</h3>
                </div>

                <div className="bg-white p-4 rounded-xl text-center shadow">
                  <p className="text-sm text-yellow-500">Pending</p>
                  <h3 className="font-bold text-lg">{stats.pending}</h3>
                </div>

                <div className="bg-white p-4 rounded-xl text-center shadow">
                  <p className="text-sm text-green-600">Resolved</p>
                  <h3 className="font-bold text-lg">{stats.resolved}</h3>
                </div>
              </>
            )}

          </div>

        </main>

        {/* 🔥 LOGOUT BUTTON (BOTTOM OF PAGE) */}
        

      </div>
    </div>
  );
}