import React from 'react';
import './AccountCard.css';

const AccountCard = ({ account }) => {
  const { platform, username, followers, changeToday } = account;
  return (
    <div className={`account-card ${platform.toLowerCase()}`}>
      <h3>{platform}</h3>
      <p>@{username}</p>
      <h2>{followers.toLocaleString()}</h2>
      <p className={changeToday >= 0 ? 'positive' : 'negative'}>
        {changeToday >= 0 ? `+${changeToday}` : changeToday} Today
      </p>
    </div>
  );
};

export default AccountCard;