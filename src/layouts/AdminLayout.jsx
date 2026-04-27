export default function Dashboard() {
  return (
    <div>

      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <p>Total</p>
          <h3 className="text-xl font-bold">120</h3>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <p>Pending</p>
          <h3 className="text-yellow-500 text-xl">30</h3>
        </div>
      </div>

    </div>
  );
}