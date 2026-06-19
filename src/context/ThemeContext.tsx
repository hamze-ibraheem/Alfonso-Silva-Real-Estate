import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'blue' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('blue');

  useEffect(() => {
    // Check local storage or system preference if desired, but we can default to 'blue'
    const saved = localStorage.getItem('theme') as Theme;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('theme-pure-dark');
      document.body.classList.remove('theme-blue');
    } else {
      document.body.classList.add('theme-blue');
      document.body.classList.remove('theme-pure-dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'blue' ? 'dark' : 'blue');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
