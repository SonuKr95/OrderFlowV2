export default function ActionButton({ label }) {
  return (
    <button className="bg-primary hover:bg-primary-hover text-text-primary rounded-lg px-4 py-2 font-semibold hover:cursor-pointer">
      {label}
    </button>
  );
}
