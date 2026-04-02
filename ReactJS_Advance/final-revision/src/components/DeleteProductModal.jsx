import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useDeleteProduct } from "../queries/productQueries";

const DeleteProductModal = forwardRef((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [productId, setProductId] = useState(null);
  const deleteMutation = useDeleteProduct();

  useImperativeHandle(ref, () => ({
    open: (id) => {
      setProductId(id);
      setIsOpen(true);
    },
  }));

  const handleCancelModal = () => {
    setIsOpen(false);
  };

  const handleDeleteItem = () => {
    setIsDeleting(true);
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        setIsOpen(false);
        setIsDeleting(false);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full mx-4 border border-gray-100">
        <h1 className="text-xl font-bold mb-4">Delete Product?</h1>
        <p className="text-gray-600 mb-6">
          Are you sure you want to remove this item? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleCancelModal}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 ${isDeleting ? "bg-red-200" : "bg-red-600"} text-white rounded-lg ${isDeleting ? "" : "hover:bg-red-700"} transition-colors`}
            onClick={handleDeleteItem}
            disabled={isDeleting ? true : false}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default DeleteProductModal;
