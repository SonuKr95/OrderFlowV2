import SidebarMenu from "./SidebarMenu";

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <div className="border-border bg-surface row-span-2 h-screen overflow-hidden border-r px-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        {!collapsed && (
          <h2 className="text-xl font-bold text-violet-500">OrderFlow</h2>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-2 invert hover:cursor-pointer"
        >
          ☰
        </button>
      </div>

      <SidebarMenu collapsed={collapsed} />
      {!collapsed && (
        <p className="text-text-secondary mt-3.5 text-center">
          Developed and Managed By :{" "}
          <span className="text-text-primary font-semibold underline underline-offset-2">
            <a
              target="_blank"
              href="https://www.facebook.com/sonukr095"
              title="Contact Administrator  "
            >
              Sonu Kumar
            </a>
          </span>
        </p>
      )}
    </div>
  );
}
