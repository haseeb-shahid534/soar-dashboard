import OtherDeposit from "../../svg/Other";
import PaypalDeposit from "../../svg/PayPal";
import DepositSvg from "../../svg/CardDeposit";

const getIcon = (type) => {
  const data = {
    Card: <DepositSvg />,
    PayPal: <OtherDeposit />,
    Other: <PaypalDeposit />,
  };

  return data[type];
};

const TransactionItem = ({ title, date, amount, type }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      {getIcon(type)}
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
