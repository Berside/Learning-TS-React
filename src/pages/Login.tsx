import React from 'react';
import { ThemeProvider } from 'styled-components';
import TogglerButton from '../components/TogglerButton';
import GlobalStyle from '../styles/global';
import ThemeContext from '../contexts/ThemeContext';
import { lightTheme, darkTheme } from '../styles/themes';
import useThemeMode from '../hooks/useThemeMode';
import LoginForm from '../components/LoginForm';
import { HeaderContainerStyle, HeaderContentStyle } from '../styles/header';


function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div style={HeaderContainerStyle}>
            <header style={HeaderContainerStyle}>
                <TogglerButton themeToggler={themeToggler} />
            </header>
        </div>
        <LoginForm />
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
