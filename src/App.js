import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyzeClick = () => {};

  const handleGenerateClick = () => {};

  return (
    <>
      <h1>Computer Vision</h1>
      <label htmlFor='input-field'>Insert URL or type prompt:</label>
      <br />
      <input
        type='text'
        id='input-field'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter URL to analyze or textual prompt to generate image'
      />
      <br />
      <button onClick={handleAnalyzeClick}>Analyze</button>
      <button onClick={handleGenerateClick}>Generate</button>
    </>
  );
}

export default App;
