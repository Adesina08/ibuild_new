import { useState, useEffect } from 'react';
import { getStoredTheme, setStoredTheme, applyTheme, toggleTheme, Theme } from '../../theme';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleToggle = () => {
    const newTheme = toggleTheme(theme);
    setTheme(newTheme);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <button 
      className="btn btn-outline-secondary me-2" 
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
};