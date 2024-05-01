"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import gradient from "chartjs-plugin-gradient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  gradient,
  Title,
  Tooltip,
  Filler,
  Legend
);
export const options: any = {
  responsive: true,
  plugins: { gradient },
};

const getGradient = (
  canvas: HTMLCanvasElement,
  color1: string,
  color2: string
): CanvasGradient => {
  const ctx = canvas?.getContext("2d");
  if (!ctx) {
    throw new Error("Could not get canvas context");
  }
  const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Chart = () => {
  const data: any = {
    labels,
    datasets: [
      {
        label: "Label",
        data: labels.map(() => Math.floor(Math.random() * 1001)),
        fill: true,
        borderColor: "rgba(218, 162, 0, 1)",
        pointBackgroundColor: "rgba(218, 162, 0, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(218, 162, 0, 1)",
        backgroundColor: (ctx: any) => {
          const gradient = ctx.chart.ctx.createLinearGradient(
            0,
            0,
            0,
            ctx.chart.height - 20
          );
          gradient.addColorStop(0, "rgba(243, 237, 83, 0.6)");
          gradient.addColorStop(1, "rgba(240, 243, 83, 0)");
          return gradient;
        },
        lineTension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
