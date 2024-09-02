import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './contexts/ModalContext';
import { DateProvider } from './contexts/DateContext.tsx';
import { EventsProvider } from './contexts/EventsContext.tsx';
import App from './App.tsx';
import './index.scss';
import './styles/inputs.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <DateProvider>
        <EventsProvider>
          <App />
        </EventsProvider>
      </DateProvider>
    </ModalProvider>
  </StrictMode>
);
