import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-800">
      {/* Sidebar takes width naturally */}
      <Sidebar />

      {/* Content fills remaining space */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
}