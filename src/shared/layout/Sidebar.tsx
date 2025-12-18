import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 bg-gray-900 shadow-lg
          transform transition-transform duration-300 z-40
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-4 font-bold text-xl border-b bg-gray-900 text-white">
          Anime Explorer
        </div>

        <nav className="flex flex-col p-4 gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-600 text-gray-200"
              }`
            }
            onClick={() => setOpen(false)}
          >
            🏠 Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive ? "bg-gray-700 text-white" : "hover:bg-gray-600 text-gray-200"
              }`
            }
            onClick={() => setOpen(false)}
          >
            ❤️ Favorites
          </NavLink>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
