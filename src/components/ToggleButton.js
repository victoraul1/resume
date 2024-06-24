import React from 'react';
import './ToggleButton.css';

function ToggleButton({ toggleTheme, theme }) {
  return (
    <button className="toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
}

export default ToggleButton;
