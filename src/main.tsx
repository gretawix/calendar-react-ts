import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './contexts/ModalContext';
import { DateProvider } from './contexts/DateContext';
import { EventsProvider } from './contexts/EventsContext';
import { QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import { QueryClient } from '@tanstack/react-query';
import './index.scss';
import './styles/inputs.scss';

export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <EventsProvider>
          <DateProvider>
            <App />
          </DateProvider>
        </EventsProvider>
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>
);
