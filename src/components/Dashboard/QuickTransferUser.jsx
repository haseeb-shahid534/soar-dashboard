const QuickTransferUser = ({ image, name, role }) => (
  <div className="flex-shrink-0 flex flex-col items-center text-sm min-w-[100px]">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mb-2 object-cover"
    />
    <span className="font-semibold text-sm text-[#1e1e50]">{name}</span>
    <span className="text-xs text-blue-600 font-medium">{role}</span>
  </div>
);

export default QuickTransferUser;
