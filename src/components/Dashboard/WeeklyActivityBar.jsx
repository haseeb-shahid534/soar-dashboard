import { Bar } from "react-chartjs-2";
const fullWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeeklyActivityChart = ({ data }) => {
  const barData = {
    labels: fullWeek,
    datasets: [
      {
        label: "Deposit",
        data: fullWeek.map(
          (day) => data.find((d) => d.day === day)?.deposit || 0
        ),
        backgroundColor: "#3b82f6",
        borderRadius: 12,
        barPercentage: 0.3,
      },
      {
        label: "Withdraw",
        data: fullWeek.map(
          (day) => data.find((d) => d.day === day)?.withdraw || 0
        ),
        backgroundColor: "#1f2937",
        borderRadius: 12,
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
      datalabels: { display: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#e5e7eb",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="flex flex-col">
      <h4 className="font-bold mb-4 text-[#1e1e50] text-xl">Weekly Activity</h4>
      <div className="bg-white p-4 rounded-2xl text-gray-600">
        <div className="flex justify-end gap-3">
          <div className="flex gap-2 items-center">
            <div className="h-3 w-3 rounded-full  bg-[#3b82f6]" />
            <p>Deposit</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-3 w-3 rounded-full  bg-[#1f2937]" />
            <p>Withdrawal</p>
          </div>
        </div>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
