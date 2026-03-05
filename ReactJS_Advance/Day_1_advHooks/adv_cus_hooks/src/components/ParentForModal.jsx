import React from "react";
import { useRef } from "react";
import Modal from "./Modal";

export default function ParentForModal() {
  const modalRef = useRef(null);

  const handleOpenModal = () => {
    modalRef.current.open();
  };

  const handleToggle = () => {
    modalRef.current.toggle();
  };

  console.log("Parent rendered! (This only happens ONCE on load)");
  return (
    <div className="p-10 flex flex-col items-center gap-6">
      <h1 className="text-3xl font-black">Parent Dashboard</h1>

      <div className="flex gap-4">
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Invoke .open()
        </button>

        <button
          onClick={handleToggle}
          className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50"
        >
          Invoke .toggle()
        </button>
      </div>

      <Modal ref={modalRef}>
        <p>
          This content is passed via props, but the visibility is managed via
          Ref!
        </p>
      </Modal>
    </div>
  );
}
