import { Link } from "react-router-dom";

const MenuItem = ({ link, label, isActive, icon }) => {
  return (
    <Link
      to={link}
      key={label}
      className={`flex items-center gap-2 px-4 py-2 rounded-r-full transition-colors ${
        isActive
          ? "border-l-4 border-black text-black font-semibold bg-gray-100"
          : "text-gray-400"
      }`}
    >
      {icon(isActive ? "#232323" : "#B1B1B1")}
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
