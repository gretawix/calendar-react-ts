import { createContext, ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { eventsService } from '../eventService';
import { eventsQueryKey, queryClient } from '../query';

import { SingleEvent } from '../types';

import type { AllEventsContextType } from './contextTypes';

export const AllEventsContext = createContext<AllEventsContextType | undefined>(
  undefined
);

export const AllEventProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const query = useQuery({
    queryKey: [eventsQueryKey],
    queryFn: eventsService.getAll,
  });

  const { data: events, isLoading } = query;
  const allEvents = events ?? [];

  const updateAllEvents = (newEventData: SingleEvent) => {
    queryClient.setQueryData<SingleEvent[]>(
      [eventsQueryKey],
      (prevEvents = []) => {
        const updatedEvents = [...prevEvents, newEventData];
        eventsService.saveEvent(newEventData);
        return updatedEvents;
      }
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AllEventsContext.Provider value={{ allEvents, updateAllEvents }}>
      {children}
    </AllEventsContext.Provider>
  );
};
