import React from 'react';
import './Header.css';

const Header = ({ totalFollowers, darkMode, toggleDarkMode }) => {
  return (
    <div className="header">
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {totalFollowers.toLocaleString()}</p>
      </div>
      <div className="toggle-container">
        <span>Dark Mode</span>
        <input type="checkbox" id="dark-mode-toggle" checked={darkMode} onChange={toggleDarkMode} />
        <label htmlFor="dark-mode-toggle" className="toggle-label"></label>
      </div>
    </div>
  );
};

export default Header;