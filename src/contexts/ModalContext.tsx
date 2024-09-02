import { createContext, useState, ReactNode, useCallback, useRef } from 'react';
import { positionModalX, positionModalY } from '../utils/positioning';

import type { ModalContextType } from './contextTypes';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = useCallback((event: React.MouseEvent) => {
    setIsModalOpen(true);
    positionModalY(event, modalRef);
    positionModalX(event, modalRef);
  }, []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalRef }}
    >
      {children}
    </ModalContext.Provider>
  );
};
