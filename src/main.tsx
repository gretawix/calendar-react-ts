import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './contexts/ModalContext';
import App from './App.tsx';
import './index.scss';
import './styles/inputs.scss';
import { DateProvider } from './contexts/DateContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <DateProvider>
        <App />
      </DateProvider>
    </ModalProvider>
  </StrictMode>
);
