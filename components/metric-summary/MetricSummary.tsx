import React from "react"
import { LuArrowDownRightSquare, LuArrowUpRightSquare } from "react-icons/lu"

import { cn } from "@/lib/utils"

import { Card, CardContent } from "../ui/card"

const cards = [1, 2, 3, 4]

const metrics = [
  {
    label: "Realtime users",
    count: 345,
    difference: "+9.12%",
    icon: <LuArrowUpRightSquare />,
  },
  {
    label: "Total visits",
    count: "45,687",
    difference: "+24.4%",
    icon: <LuArrowDownRightSquare />,
  },
  {
    label: "Bounce rate",
    count: "76.4%",
    difference: "+5.1%",
    icon: <LuArrowUpRightSquare />,
  },
  {
    label: "Visit duration",
    count: "1m 32s",
    difference: "-11.9%",
    icon: <LuArrowDownRightSquare />,
  },
]

const MetricTitle = ({ children }) => {
  return (
    <div>
      <div className="my- text-xs font-semibold uppercase text-gray-500">
        {children}
      </div>
    </div>
  )
}

function MetricSummary() {
  return (
    <div className="grid grid-cols-12 gap-4  text-center">
      {metrics.map((metric) => (
        <Card className="col-span-12 p-4 md:col-span-6 lg:col-span-3">
          <CardContent>
            <MetricTitle>{metric.label} </MetricTitle>
            <div className="flex flex-col items-center justify-center space-y-2  ">
              <div className="text-2xl font-medium text-black">
                {metric.count}
              </div>

              <div
                className={cn("flex flex-row items-center space-x-2", {
                  "text-red-500": metric.difference.startsWith("-"),
                  "text-green-500": metric.difference.startsWith("+"),
                })}
              >
                <div> {metric.difference} </div>
                <div className="text-2xl"> {metric.icon}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MetricSummary
