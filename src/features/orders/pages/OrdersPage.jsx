import { orderTableColumns } from "../constants/orderTableColumns";
import List from "../../../components/ui/List";
import { useFetchOrderList } from "../hooks/useFetchOrderList";
import OrderRow from "../components/OrderRow";

function OrdersPage() {
  const { data: orders = [], isLoading } = useFetchOrderList();
  if (isLoading) return <div>Loadind Orderlist</div>;
  return (
    <div className="grid-row-2 relative grid">
      <List columns={orderTableColumns} colStart={1} rowStart={3}>
        {orders?.map((order) => {
          return <OrderRow key={order.id} order={order} />;
        })}
      </List>
    </div>
  );
}

export default OrdersPage;
