import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ModalProvider } from './contexts/ModalContext';
import { DateProvider } from './contexts/DateContext';
import { EventsProvider } from './contexts/NewEventContext/index.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { AllEventProvider } from './contexts/AllEventsContext.tsx';
import { queryClient } from './query.ts';
import App from './App.tsx';
import './index.scss';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AllEventProvider>
        <ModalProvider>
          <EventsProvider>
            <DateProvider>
              <App />
            </DateProvider>
          </EventsProvider>
        </ModalProvider>
      </AllEventProvider>
    </QueryClientProvider>
  </StrictMode>
);
