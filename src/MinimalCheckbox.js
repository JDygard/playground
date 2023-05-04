import React from 'react';
import './MinimalCheckbox.css';

const MinimalCheckbox = ({ checked, onChange, id }) => {
  return (
    <div className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} id={id} />
      <span className="checkbox-indicator"></span>
    </div>
  );
};

export default MinimalCheckbox;
