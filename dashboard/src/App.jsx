import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`dashboard ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <div className="toggle-switch">
          <label htmlFor="darkModeSwitch">Dark Mode</label>
          <input 
            type="checkbox" 
            id="darkModeSwitch" 
            checked={darkMode} 
            onChange={toggleDarkMode} 
          />
        </div>
      </div>
      
      <div className="cards">
        <div className="card facebook">
          <img className="profile-image" src="/images/icon-facebook.svg" alt="facebook"/>
          <h2> <i class="fab fa-facebook-f"></i> @nathanf</h2>
          <p className="followers">1987</p>
          <p className="type">Followers</p>
          <p className="today">+12 Today</p>
        </div>
        <div className="card twitter">
        <img className="profile-image" src="/images/icon-twitter.svg" alt="twitter"/>
          <h2><i className="fab fa-twitter"></i> @nathanf</h2>
          <p className="followers">1044</p>
          <p className="type">Followers</p>
          <p className="today">+99 Today</p>
        </div>
        <div className="card instagram">
        <img className="profile-image" src="/images/icon-instagram.svg" alt="instagram"/>
          <h2><i className="fab fa-instagram"></i> @realnathanf</h2>
          <p className="followers">11k</p>
          <p className="type">Followers</p>
          <p className="today">+1099 Today</p>
        </div>
        <div className="card youtube">
        <img className="profile-image" src="/images/icon-youtube.svg" alt="youtube"/>
          <h2><i className="fab fa-youtube"></i> Nathan F.</h2>
          <p className="followers">8239</p>
          <p className="sub" >SUBSCRIBERS</p>
          <p className="today">-144 Today</p>
        </div>
      </div>

      <h2 className="overview-title">Overview - Today</h2>
      <div className="overview-cards">
        <div className="overview-card facebook">
        <img className="profile-image1" src="/images/icon-facebook.svg" alt="facebook"/>
          <h3>Page Views</h3>
          <p className="overview-stat">87</p>
         
          <p className="overview-change positive">+3%</p>
        </div>
        <div className="overview-card facebook">
        <img className="profile-image1" src="/images/icon-facebook.svg" alt="facebook"/>
          <h3>Likes</h3>
          <p className="overview-stat">52</p>
          <p className="overview-change negative">-2%</p>
        </div>
        <div className="overview-card instagram">
        <img className="profile-image1" src="/images/icon-instagram.svg" alt="instagram"/>
          <h3>Likes</h3>
          <p className="overview-stat">5462</p>
          <p className="overview-change positive">+2257%</p>
        </div>
        <div className="overview-card instagram">
        <img className="profile-image1" src="/images/icon-instagram.svg" alt="instagram"/>
          <h3>Profile Views</h3>
          <p className="overview-stat">52k</p>
          <p className="overview-change positive">+1375%</p>
        </div>
        <div className="overview-card twitter">
        <img className="profile-image1" src="/images/icon-twitter.svg" alt="twitter"/>
          <h3>Retweets</h3>
          <p className="overview-stat">117</p>
          <p className="overview-change positive">+303%</p>
        </div>
        <div className="overview-card twitter">
        <img className="profile-image1" src="/images/icon-twitter.svg" alt="twitter"/>
          <h3>Likes</h3>
          <p className="overview-stat">507</p>
          <p className="overview-change positive">+553%</p>
        </div>
        <div className="overview-card youtube">
        <img className="profile-image1" src="/images/icon-youtube.svg" alt="youtube"/>
          <h3>Likes</h3>
          <p className="overview-stat">107</p>
          <p className="overview-change negative">-19%</p>
        </div>
        <div className="overview-card youtube">
        <img className="profile-image1" src="/images/icon-youtube.svg" alt="youtube"/>
          <h3>Total Views</h3>
          <p className="overview-stat">1407</p>
          <p className="overview-change negative">-12%</p>
        </div>
      </div>
    </div>
  );
}

export default App;