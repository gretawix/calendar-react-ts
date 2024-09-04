import type { OneWeekDay, SingleEvent } from '../types';

export type initNewEventFn = (event: React.MouseEvent) => void;

export type ModalContextType = {
  isModalOpen: boolean;
  openModal: (event: React.MouseEvent) => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
};

export type DateContextType = {
  baseDay: Date;
  week: OneWeekDay[];
  hoursList: string[];
  today: OneWeekDay;
  timeZone: string;
};

export type NewEventContextType = {
  setNewEventData: React.Dispatch<React.SetStateAction<SingleEvent>>;
  setActiveTileColId: React.Dispatch<React.SetStateAction<string>>;
  activeTileColId: string;
  initNewEvent: initNewEventFn;
  saveEvent: () => void;
  cancelEventCreation: () => void;
  clickedEvent: React.MouseEvent | null;
  newEventData: SingleEvent;
};

export type AllEventsContextType = {
  allEvents: SingleEvent[];
  updateAllEvents: (newEventData: SingleEvent) => void;
};
