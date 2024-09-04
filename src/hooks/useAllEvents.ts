import { useContext } from 'react';
import { AllEventsContext } from '../contexts/AllEventsContext';

import type { AllEventsContextType } from '../contexts/contextTypes';

export const useAllEvents = (): AllEventsContextType => {
  const context = useContext(AllEventsContext);
  if (!context) {
    throw new Error('useAllEvents must be used within an EventProvider');
  }
  return context;
};
