import { createContext, useMemo, useState, ReactNode } from 'react';
import {
  createDay,
  createHoursList,
  getCurrentWeek,
  getTimeZone,
} from '../utils/timeCalculations';

import { DateContextType } from './contextTypes';

export const DateContext = createContext<DateContextType | undefined>(
  undefined
);

export const DateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [baseDay] = useState(new Date());

  const week = useMemo(() => getCurrentWeek(baseDay), [baseDay]);
  const hoursList = useMemo(() => createHoursList(), []);
  const today = useMemo(() => createDay(new Date()), []);
  const timeZone = useMemo(() => getTimeZone(new Date()), []);

  return (
    <DateContext.Provider value={{ baseDay, week, hoursList, today, timeZone }}>
      {children}
    </DateContext.Provider>
  );
};
