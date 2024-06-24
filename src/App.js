import React, { useState, useEffect } from 'react';
import './App.css';
import Resume from './components/Resume';
import ToggleButton from './components/ToggleButton';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  return (
    <div className="App">
      <ToggleButton toggleTheme={toggleTheme} theme={theme} />
      <Resume />
    </div>
  );
}

export default App;
