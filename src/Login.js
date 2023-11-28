// final

import React, { useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import EmployeeDetails from './EmployeeDetails';

import './Login.css';
import loginImage from './loginicon.png';
import loggedInImage from './moprg.png';
import logo from './home2.png';
import emplogo from './employee.png';
import topRightImage from './topright.png';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [showProgressBars, setShowProgressBars] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log('Login successful!');
      setLoggedIn(true);
    } else {
      console.log('Please enter both email and password.');
    }
  };

  const handleEmployeeLogoClick = () => {
    setShowEmployeeDetails(true);
    setShowProgressBars(false); // Hide progress bars
    setShowEmployeeDetails(!showEmployeeDetails);
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <img src={loggedInImage} alt="Logged In" className="login-image" />
      ) : (
        <img src={loginImage} alt="Login" className="login-image" />
      )}
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>
          <button className="emp" type="submit" onClick={handleEmployeeLogoClick}>
            Employee Productivity Dashboard
          </button>
          {showEmployeeDetails && <EmployeeDetails />}
          {showProgressBars && (
            <div>
             <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Monday
                <span className="progress-label">4%</span>
                <ProgressBar className="pro" completed={4} maxCompleted={200} bgColor="green" isLabelVisible={false} />
              </div>
            </div>
          </div>
          <br></br>
          <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Tuesday
              &nbsp; &nbsp; &nbsp;        
              <span className="progress-label">92%
              </span>
              <ProgressBar className="pro" completed = {92} maxCompleted ={200} bgColor = "green" isLabelVisible = {false} />
          </div>
          </div>
          </div>
          <br></br>
          <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Wednesday
              &nbsp; &nbsp; &nbsp;        
              <span className="progress-label">122%
              </span>
              <ProgressBar className="pro" completed = {122} maxCompleted ={200} bgColor = "green" isLabelVisible = {false} />
          </div>
          </div>
          </div>
          <br></br>
          <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Thusday
              &nbsp; &nbsp; &nbsp;        
              <span className="progress-label">93%
              </span>
              <ProgressBar className="pro" completed = {93} maxCompleted ={200} bgColor = "green" isLabelVisible = {false} />
          </div>
          </div>
          </div>
          <br></br>
          <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Friday
              &nbsp; &nbsp; &nbsp;        
              <span className="progress-label">89%
              </span>
              <ProgressBar className="pro" completed = {89} maxCompleted ={200} bgColor = "green" isLabelVisible = {false} />
          </div>
          </div>
          </div>
          <br></br>
          <div className="containerbar">
            <div className="progress-bar">
              <div className="progress-bar-fill">Productivity on Saturday
              &nbsp; &nbsp; &nbsp;        
              <span className="progress-label">98%
              </span>
              <ProgressBar className="pro" completed = {98} maxCompleted ={200} bgColor = "green" isLabelVisible = {false} />
          </div>
          </div>
          </div>
          <br></br>
          </div>
          )}
          <div className="top-right-image">
            <img src={topRightImage} alt="Top Right Image" />
          </div>
          <div className="bottom-symbols">
            <img src={logo} alt="Logo" />
            <img src={emplogo} alt="emplogo" onClick={handleEmployeeLogoClick} />
            
          </div>
        </div>
      ) : (
        <>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </>
      )}
    </div>
  );
};

export default Login;
