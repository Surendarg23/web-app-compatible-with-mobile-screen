// EmployeeDetails.js

import React, { useState } from 'react';
import './Employee.css';
import { FaSearch } from 'react-icons/fa'; 
import loggedInImage from './moprg.png';
import topRightImage from './topright.png'; 
const EmployeeDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');

  <img src={loggedInImage} alt="Employee Details" className="employee-details-image" />
  
  const employees = [
    { id: 1, name: 'Surendar', dob: '23-06-2000', role: 'React Js Developer' },
    { id: 2, name: 'Praveen', dob: '15-06-2001', role: '.NET Developer' },
    { id: 3, name: 'Aswini', dob: '12-11-2000', role: 'MERN Stack' },
    
  ];

  // Filter employees based on the search term
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="top-right-image">
        <img src={topRightImage} alt="Top Right Image" />
      </div>
   
    <div className="employee-details-container">

      <div className="search-container">
        <input
          type="text"
          id="search"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
         />
          <label htmlFor="search">
          <FaSearch className="search-icon" />
        </label>
      </div>
      <div className="employee-details">
        {filteredEmployees.map((employee) => (
          <div className="employee-details-item" key={employee.id}>
            <p className="employee-id">Employee ID: {employee.id}</p>
            <p className="employee-name">Name: {employee.name}</p>
            <p className="employee-dob">Date of Birth: {employee.dob}</p>
            <p className="employee-role">Role: {employee.role}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EmployeeDetails;
