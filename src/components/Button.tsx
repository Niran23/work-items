type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({
  children,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#3ddc97] px-6 py-3 rounded font-bold cursor-pointer hover:bg-[#32c985] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;