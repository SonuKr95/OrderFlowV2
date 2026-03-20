export function AdminNotes({ orderDetails }) {
  console.log(orderDetails);
  const { notes } = orderDetails;
  return (
    <div>
      <p>{`Admin Notes: ${notes}`} </p>
    </div>
  );
}
