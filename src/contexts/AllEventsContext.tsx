import { createContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { eventsService } from '../eventService';

import type { AllEventsContextType } from './contextTypes';

export const AllEventsContext = createContext<AllEventsContextType | undefined>(
  undefined
);
const eventsQueryKey = 'events';

export const AllEventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const query = useQuery({
    queryKey: [eventsQueryKey],
    queryFn: eventsService.getAll,
  });

  const { data: events, isLoading } = query;
  const allEvents = events ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AllEventsContext.Provider value={{ allEvents }}>
      {children}
    </AllEventsContext.Provider>
  );
};
