const TransactionItem = ({ icon, title, date, amount, color }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold"
        style={{ backgroundColor: color || "#ddd" }}
      >
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>

    <div
      className={`text-sm font-semibold ${
        amount < 0 ? "text-red-500" : "text-green-600"
      }`}
    >
      {amount < 0 ? "-" : "+"}${Math.abs(amount).toLocaleString()}
    </div>
  </div>
);

export default TransactionItem;
