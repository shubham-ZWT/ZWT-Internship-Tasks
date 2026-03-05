import Accordion from "./Accordion";

export function AccordionDemo() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">React Advanced FAQ</h2>

      <Accordion allowMultiple={true}>
        <Accordion.Item id="react">
          <Accordion.Header parentId="react">What is React?</Accordion.Header>
          <Accordion.Body parentId="react">
            React is a declarative, efficient, and flexible JavaScript library
            for building user interfaces.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item id="hooks">
          <Accordion.Header parentId="hooks">What are Hooks?</Accordion.Header>
          <Accordion.Body parentId="hooks">
            Hooks are functions that let you “hook into” React state and
            lifecycle features from function components.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
