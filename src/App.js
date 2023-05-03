import React, { useState } from 'react';
import './App.css';
import SmallCard from './SmallCard';
import SelectionCard from './SelectionCard';
import './fonts.css';

function App() {
  const [updateSummary, setUpdateSummary] = useState([
    { expectedFW: 1, newFW: 2, moduleName: 'Battery' },
    { expectedFW: 2, newFW: 3, moduleName: 'E-module' },
    { expectedFW: 3, newFW: undefined, moduleName: 'HUD' },
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