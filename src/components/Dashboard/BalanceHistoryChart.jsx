import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const BalanceHistoryChart = ({ data }) => {
  const canvasRef = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
      gradientFill.addColorStop(0, "rgba(0, 102, 255, 0.4)");
      gradientFill.addColorStop(1, "rgba(0, 102, 255, 0)");
      setGradient(gradientFill);
    }
  }, []);

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Balance",
        data: data.map((item) => item.balance),
        borderColor: "blue",
        backgroundColor: gradient,
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        border: { dash: [5, 5] },
        grid: {
          color: "#aaa",
          offset: true,
          drawTicks: true,
          drawOnChartArea: true,
        },

        beginAtZero: true,
      },
      x: {
        border: { dash: [5, 5] },
        grid: {
          color: "#aaa",
          offset: true,
          drawTicks: true,
          drawOnChartArea: true,
        },

        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {gradient && <Line data={chartData} options={chartOptions} />}
    </div>
  );
};

export default BalanceHistoryChart;
