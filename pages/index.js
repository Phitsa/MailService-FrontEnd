import React from 'react';
import NavBar from '../components/navbar';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  useAuth();

  const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/access';
  };

  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold">Welcome to the Home Page</h1>
        <button onClick={logout} className="ml-4 p-2 bg-red-500 text-white rounded">Logout</button>
      </main>
    </div>
  );
};

export default Dashboard;