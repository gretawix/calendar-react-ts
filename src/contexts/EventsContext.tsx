import { createContext, useState, ReactNode } from 'react';
import { useModal } from '../hooks/useModal';
import useKeyDown from '../hooks/useKeyDown';

import type { EventsContextType, ShowNewEventTileFn } from './contextTypes';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTileColId, setActiveTileColId] = useState<string | null>(null);

  const { openModal, closeModal } = useModal();

  const showNewEventTile: ShowNewEventTileFn = (event, columnId) => {
    //todo : handle modal opening position
    console.log(event.clientY);
    openModal();
    setActiveTileColId(columnId);
  };

  const saveEvent = () => {
    closeModal();
    setActiveTileColId(null);
  };

  useKeyDown('Enter', saveEvent);

  const cancelEventCreation = () => {
    closeModal();
    setActiveTileColId(null);
  };

  useKeyDown('Escape', cancelEventCreation);

  return (
    <EventsContext.Provider
      value={{
        activeTileColId,
        setActiveTileColId,
        showNewEventTile,
        saveEvent,
        cancelEventCreation,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
