import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  //defining what should happen on clicking outside
  const closeModal = () => {
    if (isOpen) setIsOpen(false);
  };

  //UseOnClickOutside hook
  useOnClickOutside(modalRef, closeModal);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),

    status: isOpen ? "Active" : "Hidden",
  }));

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-sm w-full relative"
      >
        <h2 className="text-xl font-bold mb-4">Imperative Modal</h2>
        <div className="text-gray-600 mb-6">
          {props.children || "I am controlled by the parent's Ref!"}
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
});

export default Modal;
