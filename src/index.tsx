import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { lightTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={lightTheme}>
      <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
