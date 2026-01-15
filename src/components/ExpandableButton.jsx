export default function ExpandableButton({ children, icon, className, cbFn }) {
  return (
    <button onClick={cbFn} className="flex items-center justify-center mr-5 hover:scale-105 group">
      <span className="px-4 py-2 mr-3 text-sm font-medium text-white transition-all duration-300 ease-out translate-x-4 bg-black rounded-lg opacity-0 whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0">
        {children}
      </span>

      <button
        className={`flex items-center justify-center text-white transition rounded-full shadow-lg w-14 h-14 hover:cursor-pointer ${className} `}
      >
        {icon}
      </button>
    </button>
  );
}
