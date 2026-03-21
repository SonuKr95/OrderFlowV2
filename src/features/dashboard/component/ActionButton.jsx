export default function ActionButton({ label }) {
  return (
    <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
      {label}
    </button>
  );
}
