import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white hidden md:block">
        <div className="p-4 text-xl font-bold border-b border-blue-500">
          Admin Panel
        </div>

        <nav className="p-4 space-y-3">
          <a href="/admin/dashboard" className="block hover:bg-blue-600 p-2 rounded">
            Dashboard
          </a>
          <a href="/admin/complaints" className="block hover:bg-blue-600 p-2 rounded">
            Complaints
          </a>
          <a href="/admin/users" className="block hover:bg-blue-600 p-2 rounded">
            Users
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-bold text-gray-700">Dashboard</h1>
          <span className="text-sm text-gray-500">Welcome Admin</span>
        </header>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>

      </div>

    </div>
  );
}