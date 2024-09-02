import {
  createContext,
  useState,
  ReactNode,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useModal } from '../hooks/useModal';

import type { EventsContextType, initNewEventFn } from './contextTypes';
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

  const initNewEvent: initNewEventFn = useCallback(
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

  const cancelEventCreation = useCallback(() => {
    closeModal();
    setActiveTileColId(null);
  }, [closeModal]);

  useEffect(() => {
    if (isModalOpen && clickedEvent && modalRef.current) {
      positionModalY(clickedEvent, modalRef.current);
      positionModalX(clickedEvent, modalRef.current);
    }
  }, [isModalOpen, clickedEvent, modalRef]);

  const contextValue = {
    activeTileColId,
    setActiveTileColId,
    initNewEvent,
    saveEvent,
    cancelEventCreation,
    eventTileRef,
    clickedEvent,
  };

  return (
    <EventsContext.Provider value={contextValue}>
      {children}
    </EventsContext.Provider>
  );
};
