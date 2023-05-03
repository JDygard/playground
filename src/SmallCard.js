import React from 'react';
import './SmallCard.css';

const SmallCard = ({ moduleName, oldFw, newFw, result }) => {
  return (
    <div className="small-card">
      <div className="title-bar">
        <span className="module-name">{moduleName}</span>
        <span className="fw-version">v{oldFw} to v{newFw}</span>
      </div>
      <hr className="divider" />
      <div className="card-body">
        <span className="update-status-text">Update Status: </span>
        <span className="result">{result}</span>
      </div>
    </div>
  );
}

export default SmallCard;