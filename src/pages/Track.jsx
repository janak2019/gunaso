import { useState } from "react";
import Header from "../components/Header";
import API from "../services/api";

export default function Track() {
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const regex = /^(98|97|96)\d{8}$/;

    if (!regex.test(mobile)) {
      return setError("वैध मोबाइल नम्बर हाल्नुहोस्");
    }

    try {
      const res = await API.get(`/complaints/track/${mobile}`);
      setData(res.data);
      setError("");
    } catch (err) {
      setError("डाटा ल्याउन सकिएन");
    }
  };

  return (
    <div className=" bg-gray-100">

      <Header subtitle="गुनासो ट्र्याक गर्नुहोस्" />

      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-2">

        <input
          type="tel"
          placeholder="98XXXXXXXX"
          maxLength={10}
          className="w-full border p-3 rounded-lg"
          value={mobile}
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, ""))
          }
        />

        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-blue-600 text-white px-4 py-3 rounded-lg"
        >
          खोज्नुहोस्
        </button>

      </div>

      {error && <p className="text-red-500">{error}</p>}

      {/* Results */}
      <div className="space-y-3">

        {data.length === 0 && (
          <p className="text-gray-500 text-center">
            कुनै गुनासो फेला परेन
          </p>
        )}

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <p className="text-sm text-gray-500">
              ID: {item.id}
            </p>

            <p className="font-medium">
              {item.type}
            </p>

            <p className="text-gray-600 text-sm">
              {item.description}
            </p>

            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded ${item.status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
                }`}
            >
              {item.status}
            </span>
          </div>
        ))}

      </div>

    </div>

  );
}