import {
  createContext,
  useState,
  ReactNode,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useModal } from '../hooks/useModal';
import useKeyDown from '../hooks/useKeyDown';

import type { EventsContextType, ShowNewEventTileFn } from './contextTypes';
import { positionModalX, positionModalY } from '../utils/positioning';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeTileColId, setActiveTileColId] = useState<string | null>(null);
  const [clickedEvent, setClickedEvent] = useState<React.MouseEvent | null>(
    null
  );
  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

  const eventTileRef = useRef(null);

  const showNewEventTile: ShowNewEventTileFn = useCallback(
    (event, columnId) => {
      openModal(event);
      setActiveTileColId(columnId);
      setClickedEvent(event);
    },
    [openModal]
  );

  const saveEvent = useCallback(() => {
    closeModal();
    setActiveTileColId(null);
  }, [closeModal]);

  useKeyDown('Enter', saveEvent);

  const cancelEventCreation = useCallback(() => {
    closeModal();
    setActiveTileColId(null);
  }, [closeModal]);

  useKeyDown('Escape', cancelEventCreation);

  useEffect(() => {
    if (isModalOpen && clickedEvent && modalRef.current) {
      positionModalY(clickedEvent, modalRef.current);
      positionModalX(clickedEvent, modalRef.current);
    }
  }, [isModalOpen, clickedEvent, modalRef]);

  return (
    <EventsContext.Provider
      value={{
        activeTileColId,
        setActiveTileColId,
        showNewEventTile,
        saveEvent,
        cancelEventCreation,
        eventTileRef,
        clickedEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
