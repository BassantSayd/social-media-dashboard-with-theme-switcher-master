import React from 'react';
import './OverviewCard.css';

const OverviewCard = ({ platform, metric, value, change }) => {
  return (
    <div className={`overview-card ${platform.toLowerCase()}`}>
      <h3>{metric}</h3>
      <p>{value.toLocaleString()}</p>
      <p className={change >= 0 ? 'positive' : 'negative'}>
        {change >= 0 ? `+${change}%` : `${change}%`}
      </p>
    </div>
  );
};

export default OverviewCard;