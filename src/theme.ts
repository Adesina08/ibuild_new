// Theme management utilities
export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'theme';

export const getStoredTheme = (): Theme => {
  return (localStorage.getItem(STORAGE_KEY) as Theme) || 'dark';
};

export const setStoredTheme = (theme: Theme): void => {
  localStorage.setItem(STORAGE_KEY, theme);
};

export const applyTheme = (theme: Theme): void => {
  document.documentElement.setAttribute('data-bs-theme', theme);
};

export const toggleTheme = (currentTheme: Theme): Theme => {
  return currentTheme === 'dark' ? 'light' : 'dark';
};