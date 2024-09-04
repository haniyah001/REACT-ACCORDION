import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "Accordion Item",
    content: "This is the content for accordion item 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum.",
  },
  {
    id: 2,
    title: "Accordion Item",
    content: "This is the content for accordion item 2. Quisque ac lacus eget quam aliquam cursus at nec risus. Integer bibendum, libero vel egestas cursus.",
  },
  {
    id: 3,
    title: "Accordion Item",
    content: "This is the content for accordion item 3. Sed ac urna at quam vehicula auctor sit amet et lorem. Curabitur non urna tincidunt, interdum ipsum in.",
  },
  {
    id: 4,
    title: "Accordion Item",
    content: "This is the content for accordion item 4. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.",
  },
  {
    id: 5,
    title: "Accordion Item",
    content: "This is the content for accordion item 5. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus.",
  },
];

function App() {
  return (
    <div className="accordion_container">
      {accordionData.map((data) => (
        <AccordionItem key={data.id} item={data} />
      ))}
    </div>
  );
}

export default App;

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false);

  function handleShow() {
    setOpen(!open);
  }

  return (
    <div className={`accordion_item ${open ? "active" : ""}`}>
      <a href="#" onClick={handleShow}>
        <div>{`${item.id}`.padStart(2, "0")}</div>
        <div>{item.title}</div>
        <div>{open ? "-" : "+"}</div>
      </a>

      {open && <div>{item.content}</div>}
    </div>
  );
}
