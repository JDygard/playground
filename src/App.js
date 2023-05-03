import React from 'react';
import './App.css';
import SmallCard from './SmallCard';
import SelectionCard from './SelectionCard';
import './fonts.css';

function App() {
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
      <SelectionCard />
    </div>
  );
}

export default App;