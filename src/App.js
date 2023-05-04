import React, { useState } from 'react';
import './App.css';
import SmallCard from './SmallCard';
import SelectionCard from './SelectionCard';
import './fonts.css';

function App() {
  const [updateSummary, setUpdateSummary] = useState([
    { expectedFW: 1.93, newFW: 2.04, moduleName: 'Battery' },
    { expectedFW: 1.93, newFW: 2.04, moduleName: 'E-module' },
    { expectedFW: 1.71, newFW: 2.04, moduleName: 'HUD' },
  ]);

  return (
    <div className="App">
      <SmallCard
        moduleName="Battery"
        oldFw="1.93"
        newFw="2.04"
        result="Success"
      />
      <SmallCard
        moduleName="E-module"
        oldFw="1.93"
        newFw="2.04"
        result="Fail"
      />
      <SelectionCard updateSummary={updateSummary} />
    </div>
  );
}

export default App;