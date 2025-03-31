import { useRef } from "react";
import { useSelector } from "react-redux";
import "chart.js/auto";
import CreditCard from "../components/Dashboard/CreditCard";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import WeeklyActivityChart from "../components/Dashboard/WeeklyActivityBar";
import ExpenseStatsChart from "../components/Dashboard/ExpenseStatisticsChart";
import TransactionItem from "../components/Dashboard/TransactionItem";
import QuickTransferUser from "../components/Dashboard/QuickTransferUser";
import SendSvgIcon from "../svg/SendSvgIcon";
import ArrowSvgIcon from "../svg/ArrowSvgIcon";
import BalanceHistoryChart from "../components/Dashboard/BalanceHistoryChart";
import SpinnerLoading from "../components/Spinner";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);
const Dashboard = () => {
  const { dashboardData, loading } = useSelector((state) => state.dashboard);
  const scrollRef = useRef(null);

  if (loading || !dashboardData) return <SpinnerLoading />;

  const handleScrollRight = () => {
    scrollRef.current?.scrollBy({ left: 120, behavior: "smooth" });
  };

  return (
    <div className="w-full p-4 space-y-6">
      {/* Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col h-full">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-[#1e1e50]">My Cards</h3>
            <span className="text-sm text-[#1e1e50] cursor-pointer">
              See All
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide rounded-2xl p-3 h-full">
            {dashboardData.cards.map((card, index) => (
              <CreditCard key={index} index={index} {...card} />
            ))}
          </div>
        </div>

        <div className="flex flex-col h-full">
          <h4 className="font-semibold text-[#1e1e50] text-lg mb-2">
            Recent Transaction
          </h4>
          <div className="bg-white rounded-2xl p-3 flex-1">
            {dashboardData.transactions.map((tx, i) => (
              <TransactionItem {...tx} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <WeeklyActivityChart data={dashboardData.weeklyActivity} />
        </div>
        <div>
          <ExpenseStatsChart expenseStats={dashboardData.expenseStats} />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h4 className="font-semibold mb-2 text-[#1e1e50] text-lg">
            Quick Transfer
          </h4>
          <div className=" bg-white rounded-2xl p-4 flex-1">
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex overflow-x-auto space-x-4 px-1 scroll-smooth scrollbar-hide"
              >
                {dashboardData.quickTransfers.map((user, i) => (
                  <QuickTransferUser key={i} {...user} />
                ))}
              </div>

              <button
                onClick={handleScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
              >
                <ArrowSvgIcon />
              </button>
            </div>

            <div className="flex mt-4 items-center bg-[#f1f5fb] rounded-full px-4 py-2">
              <span className="text-sm text-gray-500 mr-2">Write Amount</span>
              <input
                type="text"
                value="525.50"
                className="bg-transparent text-[#1e1e50] font-medium text-sm outline-none w-full"
                readOnly
              />
              <button className="flex items-center px-4 py-2 bg-black text-white rounded-full space-x-2 ml-2">
                <span>Send</span>
                <SendSvgIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h4 className="font-semibold mb-2 text-[#1e1e50] text-lg">
            Balance History
          </h4>
          <BalanceHistoryChart data={dashboardData.balanceHistory} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
