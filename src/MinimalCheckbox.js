import React from 'react';
import './MinimalCheckbox.css';

const MinimalCheckbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkbox-indicator"></span>
    </label>
  );
};

export default MinimalCheckbox;
