export default function SpeechBubble({ message, tailwindClass }) {
  return (
    <div className={tailwindClass}>
      <div className="relative bg-white p-4 rounded-md">
        <div className="p-4 border-2 border-dashed rounded-md">
          <p>{message}</p>
        </div>
        <div className="absolute -bottom-5 -left-5 p-2.5 rounded-full bg-white"></div>
        <div className="absolute -bottom-8 -left-8 p-1.5 rounded-full bg-white"></div>
        <div className="absolute -bottom-11 -left-11 p-1 rounded-full bg-white"></div>
      </div>
    </div>
  );
}
