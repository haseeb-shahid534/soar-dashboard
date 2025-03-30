import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ArcElement, Tooltip, ChartDataLabels);

const ExpenseStatisticsChart = ({ expenseStats }) => {
  const values = expenseStats.map((item) => item.value);
  const labels = expenseStats.map((item) => item.category);

  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
  ];

  const maxOffset = 40;
  const minOffset = 20;
  const maxValue = Math.max(...values);

  const offset = values.map((val) => {
    const normalized = val / maxValue;
    return minOffset + (maxOffset - minOffset) * normalized;
  });

  const total = values.reduce((a, b) => a + b, 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: values,
        backgroundColor: colors.slice(0, values.length),
        borderWidth: 1,
        offset,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value, ctx) => {
          const percent = ((value / total) * 100).toFixed(0);
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return `${percent}%\n${label}`;
        },
        align: "center",
        anchor: "center",
        clamp: true,
      },
    },
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <h4 className="font-bold">Monthly Expense</h4>

      <div className="flex-1 rounded-2xl overflow-hidden bg-white p-3">
        <Pie data={data} options={options} />;
      </div>
    </div>
  );
};

export default ExpenseStatisticsChart;
