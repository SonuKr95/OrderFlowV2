// import use from "./OrdersListItem";
import List from "../../../components/ui/List";
import { customerTableColumns } from "../constant/customerTableColumns";
import CustomerRow from "../components/CustomerRow";
import { useFecthCustomers } from "../hooks/useFecthCustomers";

function CustomerList() {
  const { data: customers = [], isLoading } = useFecthCustomers();
  if (isLoading) return <div>Fetching customer</div>;

  return (
    <div className="grid-row-2 relative grid">
      <List columns={customerTableColumns} colStart={1} rowStart={3}>
        {customers?.map((customer) => {
          return <CustomerRow customer={customer} />;
        })}
      </List>
    </div>
  );
}

export default CustomerList;
