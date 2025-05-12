import React, { useState } from 'react';
import DateInput from './components/DateInput';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Компонент ввода даты</h1>
      <ThemeSwitcher />
      <DateInput darkMode={darkMode} />
    </div>
  );
}

export default App;