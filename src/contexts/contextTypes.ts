import { createDay, getCurrentWeek } from '../utils/timeCalculations';

export type ShowNewEventTileFn = (
  event: React.MouseEvent,
  columnId: string
) => void;

export type ModalContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
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
  showNewEventTile: ShowNewEventTileFn;
  saveEvent: () => void;
  cancelEventCreation: () => void;
};
