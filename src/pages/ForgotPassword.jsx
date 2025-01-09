import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post("http://localhost:9897/api/users/forgot-password", { email });
      if (response.data.success) {
        toast.success("A reset link has been sent to your email");
        navigate("/login");
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-4">
      <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        {/* Left Section */}
        <div className="flex-1 p-6 md:p-8 bg-gradient-to-b from-blue-400 to-blue-600 text-white flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Forgot Password</h2>
          <p className="mt-2 md:mt-4 text-sm md:text-lg text-center">
            Please enter your email to reset your password
          </p>
        </div>
        
        {/* Right Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center items-center">
          <h2 className="text-xl md:text-2xl font-semibold text-center">Confirm Your Email Address</h2>
          <form onSubmit={handleResetPassword} className="flex flex-col w-full mt-4 md:mt-6 space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 border-b border-gray-300 outline-none text-gray-700 placeholder-gray-500 rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 md:p-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Reset Password"}
            </button>
          </form>
          
          <p className="text-center text-sm mt-4 md:mt-6">
            Remembered your password?{" "}
            <a href="/login" className="font-semibold text-blue-600 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
