import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();


  const redirectToLogin = () => {
    navigate("/login"); // Redirect to the signin page
  };

  const redirectToSignUp = () => {
    navigate("/signup");
  }

  const redirectToHome = () => {
    navigate("/");
  }

  const redirectToAbout = () => {
    navigate("/about");
  }

  // const redirectToSignUp = () => {
  //   navigate("/signup");
  // }

  // const redirectToSignUp = () => {
  //   navigate("/signup");
  // }

  // const redirectToSignUp = () => {
  //   navigate("/signup");
  // }

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-green-400 to-cyan-400 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center pl-16">
          <img
            src="/scrumban-logo.png"
            alt="Scrumban.AI Logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li className="hover:text-gray-200 cursor-pointer" onClick={redirectToHome}>Home</li>
          <li className="hover:text-gray-200 cursor-pointer" onClick={redirectToAbout}>About</li>
          <li className="hover:text-gray-200 cursor-pointer" onClick={redirectToLogin}>Services</li>
          <li className="hover:text-gray-200 cursor-pointer" onClick={redirectToLogin}>Pricing</li>
          <li className="hover:text-gray-200 cursor-pointer" onClick={redirectToLogin}>Contact</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-green-600 bg-white rounded-md hover:bg-gray-100" onClick={redirectToLogin}>
          Login
          </button>
          <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700" onClick={redirectToSignUp}>
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
