import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    if (otp === "123456") {
      navigate("/restaurants");
    } else {
      alert("Invalid OTP! Try 123456");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-2xl font-bold mb-6">Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter 6-digit OTP"
          className="w-60 border rounded-lg px-3 py-2 text-center mb-4"
        />
        <button
          onClick={handleVerify}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
