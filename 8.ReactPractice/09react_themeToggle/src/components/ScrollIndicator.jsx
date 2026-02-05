import { FaArrowDown } from "react-icons/fa";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-15">
      <div className="w-8 h-14 rounded-full bg-red-600 flex items-start justify-center p-2">
        <FaArrowDown className="text-white text-sm animate-scrollDown" />
      </div>
      <p className="mt-4 text-white text-sm tracking-wide">Scroll for more Info</p>
    </div>
  );
}
