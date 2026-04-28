import { Link } from "react-router-dom";

export default function Header({ title, subtitle }) {
  return (
    <div className="bg-blue-700 text-white py-2 px-6 shadow flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-lg md:text-xl font-bold">
          डिजिटल गुनासो प्रणाली
        </h1>
        <p className="text-sm opacity-90">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <Link
        to="/"
        className="flex items-center gap-2 bg-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-800 transition"
      >
        🏠 <span className="hidden sm:inline">होम पेज</span>
      </Link>

    </div>
  );
}