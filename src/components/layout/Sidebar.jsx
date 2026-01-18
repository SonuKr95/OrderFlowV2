import SidebarMenu from "./SidebarMenu";
import { menuclose } from "..//..//icons/_index";

function Sidebar() {
  return (
    <div className="row-start-1 row-end-3 h-screen px-3.5">
      <div className="mb-3 flex items-center gap-3 py-4">
        <h2 className="text-primary-brand-ocean-green text-4xl font-bold tracking-normal uppercase">
          Deals Mart
        </h2>
        <img src={menuclose} alt="" className="mt-1 hover:cursor-pointer" />
      </div>
      <SidebarMenu />
    </div>
  );
}

export default Sidebar;
