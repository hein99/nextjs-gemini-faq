export default function CategoryBar({ name, onClick }) {
  return (
    <button
      className="bg-slate-500 w-96 py-4 px-6 rounded-full hover:bg-slate-400"
      onClick={onClick}
    >
      <p className="text-neutral-100 font-bold">{name}</p>
    </button>
  );
}
