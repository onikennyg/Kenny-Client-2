import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-2xl">
      <h1 className="text-4xl mb-4">Logout Successful!</h1>
      <p className="text-xl">You will be redirected to the landing page in 3 seconds...</p>
    </div>
  );
};

export default Logout;
