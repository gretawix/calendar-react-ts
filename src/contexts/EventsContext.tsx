import {
  createContext,
  useState,
  ReactNode,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { useModal } from '../hooks/useModal';
import { positionModalX, positionModalY } from '../utils/positioning';

import type { EventsContextType, initNewEventFn } from './contextTypes';
import type { SingleEvent } from '../types/main';
import { constructNewEvent } from '../utils/events';

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

  const [newEventData, setNewEventData] = useState<SingleEvent | null>(null);
  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

  const newEventTileRef = useRef(null);

  const initNewEvent: initNewEventFn = useCallback(
    (event, columnId) => {
      openModal(event);
      setActiveTileColId(columnId);
      setClickedEvent(event);
      const newEvent = constructNewEvent(event);
      setNewEventData(newEvent);
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

  return (
    <EventsContext.Provider
      value={{
        activeTileColId,
        setActiveTileColId,
        initNewEvent,
        saveEvent,
        cancelEventCreation,
        newEventTileRef,
        clickedEvent,
        newEventData,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};
