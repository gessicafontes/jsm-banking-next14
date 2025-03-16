"use client";

import { formatAmount } from "@/lib/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        data: [1250.52, 2500, 3750],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Conta 1", "Conta 2", "Conta 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            padding: 8,
            boxPadding: 8,
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";

                if (label) {
                  label += ": ";
                }
                if (typeof context.raw === "number") {
                  label += formatAmount(context.raw);
                }

                return label;
              },
            },
          },
          decimation: {
            enabled: true,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
