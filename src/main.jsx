import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react'; // Correct import
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);