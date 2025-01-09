import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import scrumban from "../assets/scrumban-logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );
  const navigate = useNavigate();

  const googleID =
    "418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com";

  const handleGoogleSuccess = (response) => {
  console.log("Google login success:", response.credential); // Updated
};


  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = { email, password };
      try {
        const response = await axios.post(
          "http://localhost:9897/api/users/login",
          formData
        );
        localStorage.setItem("auth", JSON.stringify(response.data.token));
        toast.success("Login successful");
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You already logged in");
      navigate("/dashboard");
    }
  }, []);

  return (<GoogleOAuthProvider>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-blue-500">
          <img
            src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?t=st=1735375418~exp=1735379018~hmac=0cf161eae16ada279a5732e32580b544f996f7c6ac5d6e79a99be2135ef08170&w=740"
            alt="Illustration"
            className="w-3/4 mb-6"
          />
          <h2 className="text-white text-3xl font-bold">Transform IQ</h2>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-4/5">
            <div className="flex justify-center py-12 ">
              <img src={scrumban} alt="" className="w-20 h-20" />
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold">Welcome back!</h2>
              <p className="text-xl font-light mb-10">
                Please enter your details
              </p>
              <form onSubmit={handleLoginSubmit} className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-4 mb-4 border-b border-black outline-none"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="w-full p-4 mb-4 border-b border-black outline-none"
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 bottom-5 cursor-pointer text-xl"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 bottom-5 cursor-pointer text-xl"
                    />
                  )}
                </div>
                <div className="flex justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember-checkbox"
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor="remember-checkbox"
                      className="text-sm font-medium cursor-pointer"
                    >
                      Remember Me
                    </label>
                  </div>
                  <a href="/forgot-password" className="text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-300 hover:text-black border border-white transition-all "
                >
                  Log In
                </button>
                <GoogleLogin
                clientId={googleID}
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleFailure}
                cookiePolicy={"single_host_origin"}
                render={(renderProps) => (
                  <div
                    onClick={renderProps.onClick}
                    className="w-full p-4 mt-4 flex items-center justify-center space-x-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer"
                  >
                    <img src={GoogleSvg} alt="" className="w-6" />
                    <span>Sign up with Google</span>
                  </div>
                )}
              />
              </form>
              <p className="text-center text-sm mt-10">
                Don't have an account?{" "}
                <Link to="/signup" className="font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Follow us on</p>
              <div className="flex justify-center space-x-4 mt-4 mb-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FaFacebook className="w-8 h-8 hover:text-blue-700" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  <FaTwitter className="w-8 h-8 hover:text-blue-500" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800"
                >
                  <FaLinkedin className="w-8 h-8 hover:text-blue-900" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500"
                >
                  <FaInstagram className="w-8 h-8 hover:text-pink-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </GoogleOAuthProvider>);
};

export default Login;