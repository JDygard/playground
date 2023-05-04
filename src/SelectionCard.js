import React, { useState } from 'react';
import './SelectionCard.css';
import MinimalCheckbox from './MinimalCheckbox';
import RippleEffect from './RippleEffect';
import Button from './Button';

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
                    <div key={index} style={{ width: "100%" }}>
                        <RippleEffect>
                            <label htmlFor={`checkbox-${index}`} className="module-bar">
                                <div className="module-name">{`${item.moduleName}`}</div>
                                <div>
                                    <span>{`v${item.expectedFW} to v${item.newFW || "N/A"}   `}</span>
                                    <MinimalCheckbox
                                        id={`checkbox-${index}`}
                                        checked={checkboxStates[index]}
                                        onChange={handleCheckboxChange(index)}
                                    />
                                </div>
                            </label>
                        </RippleEffect>
                        <hr className="underline" />
                    </div>
                ))}
            </div>

            <div className="AddNewDevicePopupButtonContainer">
                <Button>
                    ABORT
                </Button>
                <Button>
                    CONTINUE
                </Button>
            </div>
        </div>
    );
};

export default SelectionCard;