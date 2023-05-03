import React, { useState } from 'react';
import './SelectionCard.css';
import MinimalCheckbox from './MinimalCheckbox';

const SelectionCard = ({ updateSummary }) => {
    const [checkboxStates, setCheckboxStates] = useState(
      updateSummary.map(() => false)
    );
  
    const handleCheckboxChange = (index) => (event) => {
      const newCheckboxStates = [...checkboxStates];
      newCheckboxStates[index] = event.target.checked;
      setCheckboxStates(newCheckboxStates);
  
      console.log(`Checkbox ${index + 1} status:`, event.target.checked ? 'Checked' : 'Unchecked');
    };
  
    return (
      <div>
        {updateSummary.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <label style={{ marginRight: '1rem' }}>{`${item.moduleName}: ${item.expectedFW} -> ${item.newFW || 'N/A'}`}</label>
            <MinimalCheckbox
              checked={checkboxStates[index]}
              onChange={handleCheckboxChange(index)}
            />
          </div>
        ))}
      </div>
    );
  };

export default SelectionCard;