"use client"

// if you use app dir, don't forget this line
import dynamic from "next/dynamic"

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const data = new Array(31).fill(0).map((_, index) => ({
  x: index + 1,
  y: Math.trunc(4000 + Math.random() * 10000),
}))

const compactNumber = (num: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact" }).format(num)

var options: ApexCharts.ApexOptions = {
  series: [
    {
      data,
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    width: 800,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },

  yaxis: {
    opposite: true,
    labels: {
      formatter(val, opts) {
        return compactNumber(val)
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      },
    },
  },
  xaxis: {
    min: 1,
    max: 31,
    tickAmount: 31,
  },
}

export function DailyVisitorColumnChart() {
  return (
    <ApexChart
      type="bar"
      options={options}
      series={options.series}
      height={200}
    />
  )
}

export default DailyVisitorColumnChart
