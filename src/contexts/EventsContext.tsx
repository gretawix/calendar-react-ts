import { createContext, useState, ReactNode } from 'react';

import type { EventsContextType } from './contextTypes';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTileColId, setActiveTileColId] = useState<string | null>(null);

  return (
    <EventsContext.Provider value={{ activeTileColId, setActiveTileColId }}>
      {children}
    </EventsContext.Provider>
  );
};
