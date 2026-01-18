import { OrderTimelineMini } from "./OrderTimelineMini";

export function OrderTimeline() {
  return (
    <div className="pr-5">
      <p>Order Status</p>
      <OrderTimelineMini />
      <OrderTimelineMini />
      <OrderTimelineMini />
      <OrderTimelineMini />
      <OrderTimelineMini />
    </div>
  );
}
