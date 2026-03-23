import List from "../../../components/ui/List";
import { orderItemTableColumns } from "../constants/orderItemTableColumns";
import OrderItemTableRow from "./OrderItemTableRow";
export default function OrderItemTable({ orderDetails }) {
  const { items = [] } = orderDetails;

  return (
    <List columns={orderItemTableColumns} colStart={1} rowStart={3}>
      {items?.map((item) => {
        return <OrderItemTableRow item={item} />;
      })}
    </List>
  );
}
