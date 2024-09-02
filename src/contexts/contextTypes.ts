import { createDay, getCurrentWeek } from '../utils/timeCalculations';

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
  handleColumnClick: (columnId: string) => void;
};
