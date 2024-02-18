import { XCircleIcon } from '@heroicons/react/24/solid';
import { faqs } from '../lib/data';
import Accordion from './accordion';

export default function Overlay({ category, onCloseButtonClick }) {
  return (
    <div className="absolute top-0 left-0 bg-secondary-950 flex justify-center items-center h-screen w-screen">
      <div className="relative bg-primary-950 container rounded-3xl p-4 flex flex-col lg:p-16">
        <button
          className="absolute -top-14 right-0 transform sm:top-0 sm:right-0 sm:-translate-x-4 sm:translate-y-4"
          onClick={onCloseButtonClick}
        >
          <XCircleIcon className="w-14" fill="#64748b" />
        </button>
        <div className="flex">
          <h1 className="bg-slate-500 py-4 px-6 rounded-full text-neutral-100 font-bold">
            {category.name}
          </h1>
        </div>

        <div className="flex-1 p-4 mt-4 overflow-y-auto">
          <Accordion
            items={faqs.filter((faq) => faq.categoryId === category.id)}
          />
        </div>
      </div>
    </div>
  );
}
