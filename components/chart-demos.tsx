// "use client"

// // if you use app dir, don't forget this line
// import dynamic from "next/dynamic"

// const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

// export function ChartDemos() {
//   const option = {
//     series: [
//       {
//         name: "STOCK ABC",
//         data: series.monthDataSeries1.prices,
//       },
//     ],
//     chart: {
//       type: "area",
//       height: 350,
//       zoom: {
//         enabled: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "straight",
//     },

//     title: {
//       text: "Fundamental Analysis of Stocks",
//       align: "left",
//     },
//     subtitle: {
//       text: "Price Movements",
//       align: "left",
//     },
//     labels: series.monthDataSeries1.dates,
//     xaxis: {
//       type: "datetime",
//     },
//     yaxis: {
//       opposite: true,
//     },
//     legend: {
//       horizontalAlign: "left",
//     },
//   }

//   return (
//     <ApexChart
//       type="area"
//       options={option}
//       series={option.series}
//       height={200}
//       width={500}
//     />
//   )
// }
