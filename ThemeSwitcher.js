import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button onClick={toggleTheme}>
      {darkMode ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
    </button>
  );
};

export default ThemeSwitcher;