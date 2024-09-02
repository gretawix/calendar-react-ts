import {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { positionModalX, positionModalY } from '../utils/positioning';

import type { ModalContextType } from './contextTypes';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickeEvent, setClickedEvent] = useState<React.MouseEvent | null>(
    null
  );
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = useCallback((event: React.MouseEvent) => {
    setIsModalOpen(true);
    setClickedEvent(event);
  }, []);

  useEffect(() => {
    if (isModalOpen && clickeEvent && modalRef.current) {
      positionModalY(clickeEvent, modalRef.current);
      positionModalX(clickeEvent, modalRef.current);
    }
  }, [isModalOpen, clickeEvent, modalRef]);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalRef }}
    >
      {children}
    </ModalContext.Provider>
  );
};
