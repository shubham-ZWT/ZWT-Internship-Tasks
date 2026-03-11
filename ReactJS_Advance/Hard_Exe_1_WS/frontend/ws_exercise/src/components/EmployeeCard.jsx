import { useDraggable } from "@dnd-kit/core";

export function EmployeeCard({ id, name }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: {
        name: name,
      },
    });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 mb-3 flex items-center gap-3 bg-white rounded-lg shadow-sm border ${
        isDragging ? "opacity-50 border-blue-400" : "border-gray-100"
      }`}
    >
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab text-gray-400 hover:text-gray-600"
      >
        ☰
      </div>
      <p className="font-medium text-gray-800">{name}</p>
    </div>
  );
}
