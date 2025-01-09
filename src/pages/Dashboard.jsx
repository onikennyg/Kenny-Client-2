import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const fetchLuckyNumber = async () => {
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    try {
      const response = await axios.get("http://localhost:3000/api/v1/dashboard", axiosConfig);
      setData({ msg: response.data.msg, luckyNumber: response.data.secret });
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchLuckyNumber();
    if (token === "") {
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-2xl">
      <h1 className="text-4xl mb-4">Dashboard</h1>
      <p className="text-xl px-5 mb-4">
        Hi {data.msg}! {data.luckyNumber}
      </p>
      <Link 
        to="/logout" 
        className="bg-black text-white border-3 border-black transition-all duration-500 w-64 py-4 rounded-full text-center font-semibold text-xl hover:bg-white hover:text-gray-800"
      >
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
