import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function OTPVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = async () => {
    const form = JSON.parse(localStorage.getItem("complaintForm"));

    try {
      await API.post("/otp/verify", {
        phone: form.phone,
        otp,
      });

      // Final complaint submit
      await API.post("/complaints", form);

      alert("गुनासो सफलतापूर्वक दर्ता भयो");

      localStorage.removeItem("complaintForm");

      navigate("/track");

    } catch {
      alert("OTP मिलेन");
    }
  };

  return (
    <div className="p-6 text-center">
      <h2 className="mb-4 font-bold">OTP Verification</h2>

      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="OTP"
        className="border p-2 mb-4"
      />

      <button
        onClick={handleVerify}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Verify
      </button>
    </div>
  );
}