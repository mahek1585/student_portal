// import React from 'react';
// import Navbar from './components/Navbar';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';

// import ProtectedRoute from './components/ProtectedRoute'; // import karo


// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         {/* <Route path="/dashboard" element={<Dashboard />} /> */}

//         <Route
//   path="/dashboard"
//   element={
//     <ProtectedRoute>
//       <Dashboard />
//     </ProtectedRoute>
//   }
// />
//       </Routes>
//     </>
//   );
// };

// export default App;




import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
      </Routes>
    </>
  );
};

export default App;
