import { useContext } from 'react';
import { NewEventContext } from '../contexts/NewEventContext';

import type { NewEventContextType } from '../contexts/contextTypes';

export const useNewEvent = (): NewEventContextType => {
  const context = useContext(NewEventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
