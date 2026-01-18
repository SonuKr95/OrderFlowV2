import { ICONS } from "..//..//icons/_index";

function SidebarItem({ text, iconName }) {
  return (
    <div className="font-lato mb-2 flex w-fit items-center gap-2 py-2.5 text-[#6A717F] hover:cursor-pointer">
      <img src={ICONS[iconName]} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default SidebarItem;
