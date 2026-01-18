import { SelectProduct } from "./SelectProduct";
import { SelectCustomer } from "./SelectCustomer";
import { OrderItemTable } from "./OrderItemTable";
import { OrderSummary } from "./OrderSummary";

function CreateOrderPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:grid-cols-2">
        <SelectCustomer />
        <SelectProduct />
      </div>

      <div className="lg:col-span-2">
        {/* <SelectProduct /> */}
        <OrderItemTable />
      </div>

      <div className="col-start-3 row-start-2">
        <OrderSummary />
        <button
          type="submit"
          className="bg-secondary-brand-surf-crest w-full rounded-lg p-5 text-xl font-bold"
        >
          Create Order
        </button>
      </div>
    </div>
  );
}

export default CreateOrderPage;
