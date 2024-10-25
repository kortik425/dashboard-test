"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  modalId: string | number | null;
  openModal: (id: string | number) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalId, setModalId] = useState<string | number | null>(null);

  const openModal = (id: string | number) => {
    setModalId(id);
  };

  const closeModal = () => {
    setModalId(null);
  };

  return (
    <ModalContext.Provider value={{ modalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
