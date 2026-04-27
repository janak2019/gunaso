import { useState } from "react";

export default function SubmitComplaint() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.type || !form.description) {
      alert("कृपया सबै आवश्यक विवरण भर्नुहोस्");
      return;
    }

    console.log(form);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-blue-700 text-white py-4 px-6 shadow">
        <h1 className="text-lg md:text-xl font-bold">
          डिजिटल गुनासो प्रणाली
        </h1>
        <p className="text-sm opacity-90">
          सुझाव तथा गुनासो दर्ता
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto p-4 md:p-6">

        <div className="bg-white rounded-2xl shadow-md p-4 md:p-8">

          {/* Title */}
          <div className="mb-6 border-b pb-3">
            <h2 className="text-lg md:text-xl font-semibold text-blue-700">
              सुझाव तथा गुनासो
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block font-medium mb-1">
                नाम
              </label>
              <input
                type="text"
                placeholder="यहाँ आफ्नो नाम लेख्नुहोस्"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            {/* Type */}
            <div>
              <label className="block font-medium mb-2">
                प्रकार <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["उजुरी", "प्रश्न", "सुझाव"].map((item) => (
                  <label
                    key={item}
                    className={`flex items-center gap-2 border rounded-lg p-3 cursor-pointer hover:bg-gray-50 ${
                      form.type === item ? "border-blue-500 bg-blue-50" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={item}
                      className="accent-blue-600"
                      onChange={(e) =>
                        setForm({ ...form, type: e.target.value })
                      }
                    />
                    {item}
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">
                विवरण <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="यहाँ विवरण लेख्नुहोस्..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}