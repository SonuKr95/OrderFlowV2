export function OrderTimelineMini({ status, changed_at, changed_by }) {
  return (
    <div className="flex justify-between">
      <img src="null" alt="icon" />
      <div className="mb-5 flex flex-col">
        <p>{status}</p>
        <p>{changed_at}</p>
        <p>{changed_by}</p>
      </div>
      <img src="null" alt="tick" />
    </div>
  );
}
