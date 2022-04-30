import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

export function App() {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(state => state === light ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Welcome to my personal blog! 🙂</h1>
      <button
        type="button"
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </ThemeProvider>
  );
}