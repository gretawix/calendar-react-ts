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
import { constructNewEvent } from '../utils/events';

import type { EventsContextType, initNewEventFn } from './contextTypes';
import type { SingleEvent } from '../types/main';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clickedEvent, setClickedEvent] = useState<React.MouseEvent | null>(
    null
  );
  const [newEventData, setNewEventData] = useState<SingleEvent | null>(null);
  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

  const eventTarget = clickedEvent?.target;
  const activeTileColId =
    eventTarget instanceof HTMLElement ? eventTarget.id : '';

  const newEventTileRef = useRef(null);

  const initNewEvent: initNewEventFn = useCallback(
    (event) => {
      openModal(event);
      setClickedEvent(event);
      const newEvent = constructNewEvent(event);
      setNewEventData(newEvent);
    },
    [openModal]
  );

  const cancelEventCreation = useCallback(() => {
    closeModal();
    setNewEventData(null);
    setClickedEvent(null);
  }, [closeModal]);

  const saveEvent = useCallback(() => {
    cancelEventCreation();
    //saveEvent
  }, [cancelEventCreation]);

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
