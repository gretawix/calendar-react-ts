import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from 'react';
import { useModal } from '../../hooks/useModal';
import { positionModalX, positionModalY } from './utils';
import { constructNewEvent, getDefaultEvent } from './utils';

import type { NewEventContextType, initNewEventFn } from '../contextTypes';
import type { SingleEvent } from '../../types';
import { useAllEvents } from '../../hooks/useAllEvents';

const defaultEvent = getDefaultEvent();

export const NewEventContext = createContext<NewEventContextType | undefined>(
  undefined
);

export const EventsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clickedEvent, setClickedEvent] = useState<React.MouseEvent | null>(
    null
  );
  const [newEventData, setNewEventData] = useState<SingleEvent>(defaultEvent);
  const { openModal, closeModal, modalRef, isModalOpen } = useModal();
  const { updateAllEvents } = useAllEvents();
  const eventTarget = clickedEvent?.target;
  const [activeTileColId, setActiveTileColId] = useState(
    eventTarget instanceof HTMLElement ? eventTarget.id : ''
  );

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
    updateAllEvents(newEventData);
  }, [cancelEventCreation, newEventData, updateAllEvents]);

  useEffect(() => {
    if (isModalOpen && clickedEvent && modalRef.current) {
      positionModalY(clickedEvent, modalRef.current);
      positionModalX(clickedEvent, modalRef.current);
    }
  }, [isModalOpen, clickedEvent, modalRef]);

  return (
    <NewEventContext.Provider
      value={{
        activeTileColId,
        setNewEventData,
        setActiveTileColId,
        initNewEvent,
        saveEvent,
        cancelEventCreation,
        clickedEvent,
        newEventData,
      }}
    >
      {children}
    </NewEventContext.Provider>
  );
};
