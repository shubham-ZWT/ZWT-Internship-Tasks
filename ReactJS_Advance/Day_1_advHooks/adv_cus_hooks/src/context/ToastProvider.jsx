import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import ToastContext from "./ToastContext";
import ToastItem from "../components/ToastItem";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = "info", duration = 3000) => {
      const id = Date.now();
      const newToast = { id, message, type };

      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {createPortal(
        <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none">
          {toasts.map((toast) => (
            <ToastItem
              key={toast.id}
              toast={toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>,
        document.getElementById("toast-root"),
      )}
    </ToastContext.Provider>
  );
}
