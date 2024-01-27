// Importing React and ReactDOM dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing global styles
import './styles/index.css';

// Importing the main App component
import App from './App';

// Importing ChakraProvider and ColorModeScript from Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';

// Importing the dark theme for Chakra UI
import darkTheme from './styles/darkTheme';

// Importing HashRouter for handling routes
import { HashRouter } from "react-router-dom";

// Importing styled from emotion
import styled from "@emotion/styled";

// Styling the main container using Emotion
const AppContainer = styled.div`
  font-family: "Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

// Creating a root using ReactDOM.createRoot for concurrent rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app within a React StrictMode for additional development checks
root.render(
  <React.StrictMode>
    {/* Wrapping the entire app in HashRouter for client-side routing */}
    <HashRouter>
      {/* Providing Chakra UI theme to the entire app */}
      <ChakraProvider theme={darkTheme}>
        {/* Styling the main container with custom font */}
        <AppContainer>
          {/* Initializing Chakra UI ColorModeScript with initialColorMode from darkTheme */}
          <ColorModeScript initialColorMode={darkTheme.config.initialColorMode} />
          {/* Rendering the main App component */}
          <App />
        </AppContainer>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);

// Optional: If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
