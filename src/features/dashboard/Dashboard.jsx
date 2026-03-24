import Card from "./component/Card";
import InventoryRow from "./component/InventoryRow";
import OrderItem from "./component/OrderItem";
import ActionButton from "./component/ActionButton";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-background min-h-screen space-y-6 p-6">
      {/* 🔝 KPI CARDS */}
      <div className="grid grid-cols-4 gap-4">
        <Card title="Today's Sales" value="₹12,400" />
        <Card title="Orders Today" value="18" />
        <Card title="Low Stock" value="6" warning />
        <Card title="Out of Stock" value="2" danger />
      </div>

      {/* 📦 INVENTORY ALERTS */}
      <div className="bg-surface rounded-xl p-4 shadow">
        <h2 className="text-text-primary mb-4 text-xl font-semibold">
          Inventory Alerts
        </h2>

        <table className="text-text-primary w-full text-sm">
          <thead className="text-left">
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
        <div className="bg-surface text-text-primary rounded-xl p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold">Recent Orders</h2>

          <ul className="space-y-3">
            <OrderItem id="#1021" name="Rahul" amount="₹450" />
            <OrderItem id="#1020" name="Amit" amount="₹320" />
            <OrderItem id="#1019" name="Priya" amount="₹780" />
          </ul>
        </div>

        {/* Sales Graph Placeholder */}
        <div className="bg-surface flex items-center justify-center rounded-xl p-4 shadow">
          <p className="text-text-primary">Sales Graph (7 days)</p>
        </div>
      </div>

      {/* ⚡ QUICK ACTIONS */}
      <div className="bg-surface text-text-primary rounded-xl p-4 shadow">
        <h2 className="mb-4 text-lg font-semibold">Quick Actions</h2>

        <div className="flex gap-4">
          <Link to="/createorder">
            <ActionButton label="Create Order" />
          </Link>
          <Link to="/addproduct">
            <ActionButton label="Add Product" />
          </Link>
          <Link to="/productlist">
            <ActionButton label="Update Product" />
          </Link>
          <Link to="/inventory">
            <ActionButton label="Adjust Stock" />
          </Link>
        </div>
      </div>
    </div>
  );
}
