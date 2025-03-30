import { Link, useLocation } from "react-router-dom";
import { menus } from "../../constants/menus";
import MenuItem from "./MenuItem";
import TaskSvg from "../../svg/task";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 min-h-screen w-60 bg-white shadow-md transform transition-transform duration-300 md:relative md:translate-x-0 md:block ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-2 mb-6 p-4">
          <TaskSvg />
          <h1 className="text-xl font-bold text-indigo-900">Soar Task</h1>
        </div>
        <nav className="space-y-3">
          {menus.map(({ label, link, icon }, index) => {
            const isActive = location.pathname === link;
            return (
              <MenuItem
                key={index}
                icon={icon}
                label={label}
                link={link}
                isActive={isActive}
              />
            );
          })}
        </nav>
      </aside>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
