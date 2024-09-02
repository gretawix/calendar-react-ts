import { useContext } from 'react';
import { DateContext } from '../contexts/DateContext';

import { DateContextType } from '../contexts/contextTypes';

export const useDate = (): DateContextType => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};
