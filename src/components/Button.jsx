export default function Button({ children, onClick, className = "" }) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-full font-recoleta bg-[#EC4B20] hover:bg-white hover:text-[#EC4B20] transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }
  