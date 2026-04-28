import Header from "../components/Header";

export default function Track() {
  return (
    <div className=" bg-gray-100">

      <Header subtitle="गुनासो ट्र्याक गर्नुहोस्" />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Track Complaint</h2>

        <input
          placeholder="Enter Phone"
          className="border p-2 rounded w-full max-w-md"
        />
      </div>

    </div>
  );
}