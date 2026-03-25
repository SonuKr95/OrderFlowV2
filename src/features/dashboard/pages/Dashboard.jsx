import Card from "../component/Card";
import InventoryRow from "../component/InventoryRow";
import OrderItem from "../component/OrderItem";
import ActionButton from "../component/ActionButton";
import { useGetDashboardStats } from "../hooks/useGetDashboardStats";
import { Link } from "react-router-dom";
import DashboardLoading from "../component/DashboardLoading";

export default function Dashboard() {
  const dashboard = useGetDashboardStats();
  if (dashboard.isPending) return <DashboardLoading />;
  const { data: dashboardData = [] } = dashboard;

  return (
    <div className="bg-background min-h-screen space-y-6 p-6">
      {/* 🔝 KPI CARDS */}
      <div className="grid grid-cols-4 gap-4">
        <Card
          title="Today's Sales"
          value={`₹ ${dashboardData.total_sales_today}`}
        />
        <Card title="Orders Today" value={dashboardData.orders_count_today} />
        <Card title="Low Stock" value={dashboardData.low_stock_count} warning />
        <Card
          title="Out of Stock"
          value={dashboardData.out_of_stock_count}
          danger
        />
      </div>

      {/* 🧾 ORDERS + 📈 GRAPH */}
      <div className="grid grid-cols-2 gap-4">
        {/* Recent Orders */}
        <div className="bg-surface text-text-primary rounded-xl p-4 shadow">
          <h2 className="mb-4 text-lg font-semibold">Recent Orders</h2>

          <ul className="space-y-3">
            {dashboardData?.recent_orders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </ul>
        </div>

        {/* Sales Graph Placeholder */}
        <div className="bg-surface flex items-center justify-center rounded-xl p-4 shadow">
          <p className="text-text-secondary">Sales Graph - Coming soon</p>
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
