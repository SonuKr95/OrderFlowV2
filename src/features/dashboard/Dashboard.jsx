import Card from "./component/Card";
import InventoryRow from "./component/InventoryRow";
import OrderItem from "./component/OrderItem";
import ActionButton from "./component/ActionButton";

export default function Dashboard() {
  return (
    <div className="min-h-screen space-y-6 bg-gray-50 p-6">
      {/* 🔝 KPI CARDS */}
      <div className="grid grid-cols-4 gap-4">
        <Card title="Today's Sales" value="₹12,400" />
        <Card title="Orders Today" value="18" />
        <Card title="Low Stock" value="6" warning />
        <Card title="Out of Stock" value="2" danger />
      </div>

      {/* 📦 INVENTORY ALERTS */}
      <div className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-4 text-lg font-semibold">Inventory Alerts</h2>

        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr>
              <th className="py-2">Product</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <InventoryRow name="Rice" stock={2} status="low" />
            <InventoryRow name="Oil" stock={0} status="out" />
            <InventoryRow name="Sugar" stock={15} status="ok" />
          </tbody>
        </table>
      </div>

      {/* 🧾 ORDERS + 📈 GRAPH */}
      <div className="grid grid-cols-2 gap-4">
        {/* Recent Orders */}
        <div className="rounded-xl bg-white p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold">Recent Orders</h2>

          <ul className="space-y-3">
            <OrderItem id="#1021" name="Rahul" amount="₹450" />
            <OrderItem id="#1020" name="Amit" amount="₹320" />
            <OrderItem id="#1019" name="Priya" amount="₹780" />
          </ul>
        </div>

        {/* Sales Graph Placeholder */}
        <div className="flex items-center justify-center rounded-xl bg-white p-4 shadow">
          <p className="text-gray-400">Sales Graph (7 days)</p>
        </div>
      </div>

      {/* ⚡ QUICK ACTIONS */}
      <div className="rounded-xl bg-white p-4 shadow">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>

        <div className="flex gap-4">
          <ActionButton label="Create Order" />
          <ActionButton label="Add Product" />
          <ActionButton label="Add Customer" />
          <ActionButton label="Adjust Stock" />
        </div>
      </div>
    </div>
  );
}
