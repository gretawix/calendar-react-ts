import { createDay, getCurrentWeek } from '../utils/timeCalculations';

export type initNewEventFn = (
  event: React.MouseEvent,
  columnId: string
) => void;

export type ModalContextType = {
  isModalOpen: boolean;
  openModal: (event: React.MouseEvent) => void;
  closeModal: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
};

export type DateContextType = {
  baseDay: Date;
  week: ReturnType<typeof getCurrentWeek>;
  hoursList: string[];
  today: ReturnType<typeof createDay>;
  timeZone: string;
};

export type EventsContextType = {
  activeTileColId: string | null;
  setActiveTileColId: (id: string | null) => void;
  initNewEvent: initNewEventFn;
  saveEvent: () => void;
  cancelEventCreation: () => void;
  eventTileRef: React.RefObject<HTMLDivElement>;
  clickedEvent: React.MouseEvent | null;
};
