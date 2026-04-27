import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Submit from "./pages/Submit";
import Track from "./pages/Track";
import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import Complaints from "./pages/admin/Complaints";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/track" element={<Track />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/complaints" element={<Complaints />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;