import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export default function Button({ onClick }) {
  return (
    <button
      className="bg-chat-950 flex py-2 px-20 rounded-full"
      onClick={onClick}
    >
      <PaperAirplaneIcon className="h-6" />
      <p className="ms-2">Ask any questions!</p>
    </button>
  );
}
