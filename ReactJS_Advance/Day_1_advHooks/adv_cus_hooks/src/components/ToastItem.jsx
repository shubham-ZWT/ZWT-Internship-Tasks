export default function ToastItem({ toast, onClose }) {
  const bgColor =
    {
      success: "bg-green-600",
      error: "bg-red-600",
      warning: "bg-yellow-500",
      info: "bg-blue-600",
    }[toast.type] || "bg-gray-800";

  return (
    <div
      className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-xl flex justify-between items-center min-w-[250px] animate-slide-in pointer-events-auto`}
    >
      <span>{toast.message}</span>
      <button onClick={onClose} className="ml-4 font-bold hover:opacity-70">
        &times;
      </button>
    </div>
  );
}
