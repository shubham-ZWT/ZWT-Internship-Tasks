import React, { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export default function Accordion({ children, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState(allowMultiple ? [] : null);

  const toggleItem = (id) => {
    setOpenIds((prev) => {
      if (allowMultiple) {
        return prev.includes(id)
          ? prev.filter((item) => item !== id)
          : [...prev, id];
      }
      return prev === id ? null : id;
    });
  };

  const isOpen = (id) => {
    return allowMultiple ? openIds.includes(id) : openIds === id;
  };

  return (
    <AccordionContext.Provider value={{ toggleItem, isOpen }}>
      <div className="border rounded-lg divide-y">{children}</div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = function AccordionItem({ id, children }) {
  return (
    <div className="accordion-item" key={id}>
      {children}
    </div>
  );
};

Accordion.Header = function AccordionHeader({ children, parentId }) {
  const { toggleItem, isOpen } = useContext(AccordionContext);
  const active = isOpen(parentId);

  return (
    <button
      onClick={() => toggleItem(parentId)}
      className={`w-full flex justify-between p-4 font-medium transition-colors ${
        active ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50"
      }`}
    >
      {children}
      <span>{active ? "−" : "+"}</span>
    </button>
  );
};

Accordion.Body = function AccordionBody({ children, parentId }) {
  const { isOpen } = useContext(AccordionContext);
  const active = isOpen(parentId);

  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        active ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0"
      }`}
    >
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
};
