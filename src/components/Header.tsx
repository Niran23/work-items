type HeaderProps = {
  cartCount: number;
  onCartClick: () => void;
  onLogout: () => void;
  onMenuClick?: () => void;
};

function Header({
  cartCount,
  onCartClick,
  onLogout,
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="bg-[#092b26] text-white px-8 py-6 flex justify-between items-center">

      {/* Left side */}
      <div className="flex items-center gap-5">

        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="text-2xl cursor-pointer"
          >
            ☰
          </button>
        )}

        <h1 className="text-2xl font-bold">
          Swag Labs
        </h1>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">

        <button
          onClick={onLogout}
          className="bg-red-500 px-4 py-2 rounded font-bold cursor-pointer hover:bg-red-600"
        >
          Logout
        </button>

        <button
          onClick={onCartClick}
          className="text-2xl cursor-pointer"
        >
          🛒

          {cartCount > 0 && (
            <span className="ml-2 text-sm bg-red-500 px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

      </div>

    </header>
  );
}

export default Header;