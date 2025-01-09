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


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("auth")) || ""
  );

  const googleID =
    "418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com";

    const handleGoogleSuccess = (credentialResponse) => {
      console.log("Google login success:", credentialResponse);
      // Handle user data or token here
    };
  
    const handleGoogleFailure = (error) => {
      console.error("Google login failed:", error);
    };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (name && lastname && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const formData = {
          username: `${name} ${lastname}`,
          email,
          password,
        };
        try {
          await axios.post("http://localhost:9897/api/users/register", formData);
          toast.success("Registration successful");
          navigate("/login");
        } catch (err) {
          toast.error(err.message);
        }
      } else {
        toast.error("Passwords don't match");
      }
    } else {
      toast.error("Please fill all inputs");
    }
  };

  useEffect(() => {
    if (token) {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
      <div className=" mt-2 mb-2 flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 p-8 flex flex-col items-center justify-center bg-gradient-to-b from-green-300 to-green-500">
          <img
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740"
            alt="Illustration"
            className="w-3/4 mb-6"
          />
          <h2 className="text-white text-2xl font-semibold">Join Us Today!</h2>
        </div>
        <div className="flex-1 flex flex-col mt-3 justify-center px-0">
          <div className="max-w-md mx-auto">
            <div className="text-center pb-10">
              <img src={scrumban} alt="Logo" className="w-20 h-20 mx-auto" />
              <h2 className="text-3xl mb-2">Welcome to our website!</h2>
              <p className="text-lg font-light mb-2">
                Please enter your details
              </p>
            </div>
            <form
              onSubmit={handleRegisterSubmit}
              className="flex flex-col space-y-1"
            >
              <div className="flex space-x-4"> 
                <input
                  type="text"
                  placeholder="Firstname"
                  name="name"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full p-4 border-b border-black outline-none"
                required
              />
              <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              className="w-full p-4 border-b border-black outline-none"
              required
            />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="w-full p-4 border-b border-black outline-none"
                  required
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 bottom-3 cursor-pointer text-xl"
                  />
                )}
              </div>
              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full mb-2 mt-4 p-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-200 hover:text-black transition"
                >
                  Sign Up
                </button>
              </div>
              <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                  useOneTap={true} // Optional: enables One Tap login
                  render={(renderProps) => (
                    <div
                      onClick={renderProps.onClick}
                      className="w-full p-4 mt-4 flex items-center justify-center space-x-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer"
                    >
                      <img src={GoogleSvg} alt="" className="w-6" />
                      <span>Log In with Google</span>
                    </div>
                  )}
                />
            </form>
            <p className="text-center mt-6 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-bold hover:underline">
                Login
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
  );
};

export default Signup;
