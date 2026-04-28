import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className=" min-h-screen flex flex-col ">

      {/* Top Navbar */}
      {/* <Navbar /> */}

      {/* Page Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}