import Image from 'next/image';

export default function BotMessage({ message }) {
  return (
    <div className="flex mt-3 pe-8">
      <div className="w-8 h-8 rounded-full  overflow-hidden">
        <Image
          src="/greeting.png"
          className="w-8"
          width="20"
          height="20"
          alt="Bot"
        />
      </div>
      <div className="flex-1 flex">
        <p className="bg-slate-100 py-1 px-4 rounded-xl ms-2">{message}</p>
      </div>
    </div>
  );
}
