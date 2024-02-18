import AccordionItem from './accordionItem';

export default function Accordion({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id}>
          {index !== 0 && <div className="mt-2"></div>}
          <AccordionItem title={item.question} context={item.answer} />
        </div>
      ))}
    </div>
  );
}
