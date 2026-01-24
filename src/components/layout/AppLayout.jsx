import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

function AppLayout() {
  return (
    <div className="grid grid-cols-[300px_minmax(900px,_1fr)] grid-rows-[100px_minmax(900px,_1fr)]">
      <aside className="row-span-2">
        <Sidebar />
      </aside>
      <header className="col-start-2 row-start-1">
        <Navbar />
      </header>
      <main className="col-start-2 row-start-2 h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
