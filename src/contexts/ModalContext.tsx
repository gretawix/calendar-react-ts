import { createContext, useState, ReactNode, useCallback, useRef } from 'react';

import type { ModalContextType } from './contextTypes';

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
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
