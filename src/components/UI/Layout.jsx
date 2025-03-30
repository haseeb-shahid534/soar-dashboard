import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import Sidebar from "./Sidebar";

const Layout = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getHeaderTitle = (path) =>
    path.includes("/setting") ? "Setting" : "Overview";
  const currentTitle = getHeaderTitle(location.pathname);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 relative overflow-hidden">
      <MobileHeader
        user={user}
        title={currentTitle}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1">
        <DesktopHeader user={user} title={currentTitle} />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
