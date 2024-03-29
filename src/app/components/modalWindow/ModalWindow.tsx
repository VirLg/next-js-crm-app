'use client';
import React from 'react';

export interface ModalWindowProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalWindow = ({ children, onClose }: ModalWindowProps) => {
  return (
    <div className="block fixed top-0 left-0 bg-gray-400 h-full w-full">
      <div
        className="bg-green-100
         absolute top-1/3 left-1/3 h-1/3 w-1/3 "
      >
        {children}
        <button onClick={() => onClose()}>del Company</button>
      </div>
    </div>
  );
};

export default ModalWindow;
