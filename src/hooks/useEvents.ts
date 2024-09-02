import { useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';

import type { EventsContextType } from '../contexts/contextTypes';

export const useEvents = (): EventsContextType => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
