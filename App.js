import React, { useState } from 'react';
import Selector from './api/Selector';

const App = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>Selector</h1>
      <Selector
        options={['Option 1', 'Option 2', 'Option 3']}
        onSelect={handleSelect}
      />
      <p>Selected Value: {selectedValue}</p>
    </div>
  );
};

export default App;
