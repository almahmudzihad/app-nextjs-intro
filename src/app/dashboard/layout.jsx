import Link from "next/link";

function DashboardLayout({ children }) {
  return (
    <div className="drawer md:drawer-open">
      
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-500 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link href="/dashboard/revenue">Revenue</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayout;
