import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router";
// import { setAuthUser } from "../../features/auth/state/userSlice";
// import { useFetchStoredAuth } from "../../features/auth/session/useFetchStoredAuth";
// import { useList } from "../../app/context/hook/useList";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

function AppLayout() {
  console.log("AppLayout mounted");

  // const { changeActiveList } = useList();

  /* REDUX STORE WILL BE IMPLEMENETED
  useEffect(() => {
    if (location.pathname === "/inventory") {
      changeActiveList("inventorylist");
    }
    if (location.pathname === "/productlist") {
      changeActiveList("productlist");
    }
  }, [location.pathname, changeActiveList]);
*/
  /*
   */

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
