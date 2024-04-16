import React, { useState } from 'react';
import Button from './components/Button';
import Suggestion from './components/Suggestion';
import AppController from './controller/AppController';

function App() {
  const [suggestion, setSuggestion] = useState("");

  const handleGetSuggestion = async () => {
    try {
      const suggestion = await AppController.getSuggestion();
      setSuggestion(suggestion);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      setSuggestion("Failed to fetch suggestion");
    }
  };

  return (
    <div className="App">
      <h1>What to Do?</h1>
      <Button onClick={handleGetSuggestion} />
      <Suggestion suggestion={suggestion} />
    </div>
  );
}

export default App;
