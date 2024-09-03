import type { OneWeekDay, SingleEvent } from '../types/main';

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

export type EventsContextType = {
  setNewEventData: React.Dispatch<React.SetStateAction<SingleEvent>>;
  setActiveTileColId: React.Dispatch<React.SetStateAction<string>>;
  activeTileColId: string;
  initNewEvent: initNewEventFn;
  saveEvent: () => void;
  cancelEventCreation: () => void;
  newEventTileRef: React.RefObject<HTMLDivElement>;
  clickedEvent: React.MouseEvent | null;
  newEventData: SingleEvent;
  allEvents: SingleEvent[];
};
