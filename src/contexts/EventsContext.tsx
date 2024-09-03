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
import { constructNewEvent, getDefaultEvent } from '../utils/events';

import type { EventsContextType, initNewEventFn } from './contextTypes';
import type { SingleEvent } from '../types/main';

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

const defaultEvent = getDefaultEvent();

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clickedEvent, setClickedEvent] = useState<React.MouseEvent | null>(
    null
  );
  const [newEventData, setNewEventData] = useState<SingleEvent>(defaultEvent);
  const { openModal, closeModal, modalRef, isModalOpen } = useModal();

  const eventTarget = clickedEvent?.target;
  const [activeTileColId, setActiveTileColId] = useState(
    eventTarget instanceof HTMLElement ? eventTarget.id : ''
  );

  const newEventTileRef = useRef(null);

  const initNewEvent: initNewEventFn = useCallback(
    (event) => {
      openModal(event);
      setClickedEvent(event);
      if (event.target instanceof HTMLElement) {
        const updatedEventData = constructNewEvent(event, event.target.id);
        setNewEventData(updatedEventData);
        setActiveTileColId(event.target.id);
      }
    },
    [openModal]
  );

  const cancelEventCreation = useCallback(() => {
    closeModal();
    setNewEventData(defaultEvent);
    setClickedEvent(null);
    setActiveTileColId('');
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
        setNewEventData,
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
