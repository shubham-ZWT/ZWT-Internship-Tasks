import React, { useState, useImperativeHandle, forwardRef } from "react";

const DeleteModal = forwardRef(({ onDeleteConfirm }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState({ id: null, name: "" });

  // Expose functions to the parent
  useImperativeHandle(ref, () => ({
    open: (id, name) => {
      setTarget({id, name});
      setIsOpen(true);
    },
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-xl font-bold text-gray-900">Confirm Delete</h2>
        <p className="text-gray-600 mt-2">
          Are you sure you want to delete this employee ({target.name})? This
          action cannot be undone.
        </p>

        <div className="flex gap-3 mt-6 justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onDeleteConfirm(target.id);
              setIsOpen(false);
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
});

export default DeleteModal;
