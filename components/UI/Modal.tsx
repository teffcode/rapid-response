import React from "react";
import { AlertTriangle, X } from "lucide-react";
import Button from "@/components/UI/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
      <div className="bg-white p-10 rounded-xl shadow-md max-w-md w-full relative text-center">
        <button
          className="absolute top-4 right-4 text-gray"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="flex justify-center mb-6">
          <div className="border-4 border-yellow-100 p-8 rounded-full">
            <AlertTriangle className="text-yellow-600" size={56} />
          </div>
        </div>

        <p className="text-base font-semibold text-secondary mb-6">
          Before creating a Rapid Response you must create a signature first
        </p>

        <Button
          variant="primary"
          text="Go to signatures"
          onClick={onConfirm}
        />
      </div>
    </div>
  );
};

export default Modal;
