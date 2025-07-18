import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EditProfile from './pages/EditProfile';
import ApplyInternshipForm from './pages/ApplyInternshipForm';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/apply" element={<ApplyInternshipForm/>} />

      </Routes>


    </>
  );
};

export default App;
