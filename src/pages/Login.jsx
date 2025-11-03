import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Header from "../components/Header";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (mobile.length === 10) {
      navigate("/otp");
    } else {
      alert("Enter a valid 10-digit number");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <h2 className="text-2xl font-bold mb-6">Enter Mobile Number</h2>
        <InputField
          label="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="tel"
          placeholder="Enter your number"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Get OTP
        </button>
      </div>
    </div>
  );
}
