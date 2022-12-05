import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
