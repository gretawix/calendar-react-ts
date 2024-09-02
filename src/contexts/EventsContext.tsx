import { createContext, useState, ReactNode, useCallback } from 'react';

import type { EventsContextType } from './contextTypes';
import { useModal } from '../hooks/useModal';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTileColId, setActiveTileColId] = useState<string | null>(null);

  const { openModal } = useModal();

  const handleColumnClick = useCallback((columnId: string) => {
    openModal();
    setActiveTileColId(columnId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EventsContext.Provider
      value={{ activeTileColId, setActiveTileColId, handleColumnClick }}
    >
      {children}
    </EventsContext.Provider>
  );
};
