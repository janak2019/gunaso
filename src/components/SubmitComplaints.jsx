import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import API from "../services/api";

export default function SubmitComplaint() {
  const [form, setForm] = useState({
    mobile: "",
    type: "",
    description: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const nepalMobileRegex = /^(98|97|96)\d{8}$/;

  // ✅ SINGLE handleSubmit (merged)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.mobile || !form.type || !form.description) {
      setError("कृपया सबै आवश्यक विवरण भर्नुहोस्");
      return;
    }

    if (!nepalMobileRegex.test(form.mobile)) {
      setError("वैध नेपाली मोबाइल नम्बर हाल्नुहोस् (98/97/96 बाट सुरु हुने 10 digit)");
      return;
    }

    setError("");

    try {
      // 🔥 AUTO SEND OTP
      await API.post("/otp/send", {
        phone: form.mobile,
      });

      // Save form temporarily
      localStorage.setItem("complaintForm", JSON.stringify(form));

      // Redirect to OTP page
      navigate("/verify-otp");

    } catch (err) {
      alert("OTP पठाउन समस्या भयो");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header subtitle="सुझाव तथा गुनासो दर्ता" />

      <div className="max-w-4xl mx-auto p-2 md:p-6">
        <div className="bg-white rounded-2xl shadow-md p-4 md:p-8">

          <div className="mb-6 border-b pb-3">
            <h2 className="text-lg md:text-xl font-semibold text-blue-700">
              सुझाव तथा गुनासो
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Mobile */}
            <div>
              <label className="block font-medium mb-1">
                मोबाइल नम्बर <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                maxLength={10}
                placeholder="98XXXXXXXX"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setForm({ ...form, mobile: value });

                  if (value && !nepalMobileRegex.test(value)) {
                    setError("अवैध मोबाइल नम्बर (98/97/96 बाट सुरु हुनुपर्छ)");
                  } else {
                    setError("");
                  }
                }}
              />

              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
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
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            {/* Submit */}
            <div>
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