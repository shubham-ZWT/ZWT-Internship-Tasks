import { useDroppable } from "@dnd-kit/core";

export function DepartmentColumn({ id, title, children }) {
  const { isOver, setNodeRef } = useDroppable({ id: id });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 p-6 rounded-2xl min-h-[400px] transition-colors ${
        isOver
          ? "bg-blue-50 border-2 border-dashed border-blue-200"
          : "bg-gray-100"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="px-3 py-1 text-xs font-bold bg-gray-200 rounded-full">
          {children.length}
        </span>
      </div>

      {/* The cards go here */}
      <div className="space-y-3">{children}</div>
    </div>
  );
}
