import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react'
import darkTheme from './styles/darkTheme'
import { HashRouter } from "react-router-dom"
import styled from "@emotion/styled";
const AppContainer = styled.div`
  font-family: "Inter, -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
        <ChakraProvider theme={darkTheme} >
          <AppContainer>
            <ColorModeScript initialColorMode={darkTheme.config.initialColorMode} />
            <App />
          </AppContainer>
        </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
