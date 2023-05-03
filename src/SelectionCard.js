import React, { useState } from 'react';
import './SelectionCard.css';
import MinimalCheckbox from './MinimalCheckbox';

const SelectionCard = ({ updateSummary }) => {
    const [checkboxStates, setCheckboxStates] = useState(
        updateSummary.map(() => true)
    );

    const handleCheckboxChange = (index) => (event) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index] = event.target.checked;
        setCheckboxStates(newCheckboxStates);
    };

    return (
        <div className="selection-card">
            <div className="selection-bar">
                <span className="module-name">Firmware Update</span>
            </div>
            <hr className="divider" />
            <div className="card-body">
                {updateSummary.map((item, index) => (
                    <div key={index} className="module-bar">
                        <label className="module-name">{`${item.moduleName}: ${item.expectedFW} -> ${item.newFW || 'N/A'}`}</label>
                        <MinimalCheckbox
                            checked={checkboxStates[index]}
                            onChange={handleCheckboxChange(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectionCard;