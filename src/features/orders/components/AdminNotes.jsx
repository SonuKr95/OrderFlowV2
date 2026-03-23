export default function AdminNotes({ orderDetails }) {
  const { notes } = orderDetails;
  return (
    <div className="rounded-lg bg-black/20 p-3 text-sm text-gray-300">
      {notes ? notes : "No notes added."}
    </div>
  );
}
