import { useEffect, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    resolved: 0,
  });

  const [loading, setLoading] = useState(true);

  // 📥 Fetch stats
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/complaints/stats");
        setStats(res.data);
      } catch (err) {
        console.error("Error fetching stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="bg-gray-50">

      {/* Header */}
      <div className="bg-blue-700 text-white p-4 text-center">
        <h1 className="text-xl font-bold">गाउँपालिका</h1>
        <p className="text-sm">डिजिटल गुनासो प्रणाली</p>
      </div>

      {/* Hero */}
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-2">
          नागरिकको आवाज, सरकारसम्म सहज पहुँच
        </h2>
        <p className="text-gray-600 mb-6">
          आफ्नो गुनासो सजिलै दर्ता गर्नुहोस् र स्थिति ट्र्याक गर्नुहोस्
        </p>

        <div className="space-y-4">
          <a href="/submit" className="block bg-blue-600 text-white py-3 rounded-xl">
            📝 सोधपुछ / सुझाव / गुनासो दर्ता गर्नुहोस्
          </a>
          <a href="/track" className="block bg-gray-300 py-3 rounded-xl">
            🔍 गुनासो ट्र्याक गर्नुहोस्
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-4 pb-4">

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
    </div>
  );
}