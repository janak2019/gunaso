import { useEffect, useState } from "react";
import API from "../../services/api";

export default function StaffDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await API.get("/complaints/my", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    setData(res.data);
  };

  return (
    <div className="p-4 space-y-4">

      <h2 className="text-xl font-bold">
        My Assigned Complaints
      </h2>

      {data.map((c) => (
        <div key={c.id} className="bg-white p-4 rounded shadow">

          <p className="font-bold">{c.type}</p>
          <p className="text-sm">{c.description}</p>

          <button className="bg-green-600 text-white px-3 py-1 rounded mt-2">
            Reply
          </button>

        </div>
      ))}

    </div>
  );
}