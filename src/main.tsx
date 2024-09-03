import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './contexts/ModalContext';
import { DateProvider } from './contexts/DateContext.tsx';
import { EventsProvider } from './contexts/EventsContext.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query/queryClient.ts';
import App from './App.tsx';
import './index.scss';
import './styles/inputs.scss';

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
