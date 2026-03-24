import { ICONS } from "..//..//icons/_index";

function SidebarItem({ text, iconName, collapsed, active }) {
  return (
    <div
      className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition-all ${
        active
          ? "bg-violet-600 text-white"
          : "text-text-secondary hover:bg-[#2a3447] hover:text-white"
      }`}
    >
      <img
        src={ICONS[iconName]}
        className="h-5 w-5 opacity-70 invert hover:opacity-100"
      />

      {!collapsed && <span className="text-sm font-medium">{text}</span>}
    </div>
  );
}
export default SidebarItem;
