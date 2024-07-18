import React from "react"

// import { ExampleChart } from "./sample-chart"
import { ColumnCharts } from "@/components/column-charts"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

function DailyVisitors() {
  return (
    <Card className="w-100 h-100">
      <CardHeader>
        <CardTitle> Daily Visitors</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {/* <ExampleChart /> */}
          <ColumnCharts />
        </div>
      </CardContent>
    </Card>
  )
}

export default DailyVisitors
