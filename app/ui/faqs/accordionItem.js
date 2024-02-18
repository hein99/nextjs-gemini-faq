'user client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function AccordionItem({ title, context }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="border-2 border-slate-500 p-4">
      <div
        className="flex justify-between"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <p>{title}</p>
        {isCollapsed ? (
          <ChevronRightIcon className="w-6" />
        ) : (
          <ChevronDownIcon className="w-6" />
        )}
      </div>
      {!isCollapsed && (
        <div className="border-t-2 border-slate-500 mt-4 pt-4">{context}</div>
      )}
    </div>
  );
}
