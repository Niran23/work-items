type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  onAllItems: () => void;
  onAbout: () => void;
  onLogout: () => void;
  onReset: () => void;
};

function Sidebar({
  isOpen,
  onClose,
  onAllItems,
  onAbout,
  onLogout,
  onReset,
}: SidebarProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-80 h-full bg-white z-50 shadow-xl">

        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={onClose}
            className="text-2xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col">

          <button
            onClick={onAllItems}
            className="text-left px-8 py-5 text-lg font-bold hover:bg-gray-100 cursor-pointer"
          >
            All Items
          </button>

          <button
            onClick={onAbout}
            className="text-left px-8 py-5 text-lg font-bold hover:bg-gray-100 cursor-pointer"
          >
            About
          </button>

          <button
            onClick={onLogout}
            className="text-left px-8 py-5 text-lg font-bold hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </button>

          <button
            onClick={onReset}
            className="text-left px-8 py-5 text-lg font-bold hover:bg-gray-100 cursor-pointer"
          >
            Reset App State
          </button>

        </nav>

      </aside>
    </>
  );
}

export default Sidebar;