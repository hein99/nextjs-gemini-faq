import Image from 'next/image';

export default function UserMessage({ message }) {
  return (
    <div className="flex flex-row-reverse mt-3 ps-8">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image
          src="/student.webp"
          className="w-8"
          width="20"
          height="20"
          alt="Bot"
        />
      </div>
      <div className="flex-1 flex flex-row-reverse">
        <p className="bg-slate-100 py-1 px-4 rounded-xl me-2">{message}</p>
      </div>
    </div>
  );
}
