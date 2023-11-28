// App.js (or wherever your routes are defined)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import EmployeeDetails from './EmployeeDetails';

const App = () => {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
