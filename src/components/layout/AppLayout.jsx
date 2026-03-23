import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { Suspense } from "react";
import PageLoader from "./PageLoader";
import { useState } from "react";

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`grid min-h-screen transition-all duration-300 ${
        collapsed ? "grid-cols-[80px_1fr]" : "grid-cols-[260px_1fr]"
      } grid-rows-[80px_1fr]`}
    >
      <aside className="border-border bg-surface row-span-2 h-full border-r">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </aside>
      <Navbar />
      <main className="bg-background col-start-2 row-start-2 px-6 py-6">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default AppLayout;
