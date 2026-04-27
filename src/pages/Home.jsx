export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-blue-700 text-white p-4 text-center">
        <h1 className="text-xl font-bold">
          उत्तरगया गाउँपालिका
        </h1>
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
            📝 गुनासो दर्ता गर्नुहोस्
          </a>
          <a href="/track" className="block bg-gray-300 py-3 rounded-xl">
            🔍 गुनासो ट्र्याक गर्नुहोस्
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-4 pb-6">
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-sm text-gray-500">कुल</p>
          <h3 className="font-bold text-lg">120</h3>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-sm text-yellow-500">Pending</p>
          <h3 className="font-bold text-lg">30</h3>
        </div>
        <div className="bg-white p-4 rounded-xl text-center shadow">
          <p className="text-sm text-green-600">Resolved</p>
          <h3 className="font-bold text-lg">90</h3>
        </div>
      </div>

    </div>
  );
}