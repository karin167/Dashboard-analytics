import React from "react"

import SectionTitle from "../generic/SectionTitle"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import TablePage from "./table"

function VisitedPages() {
  return (
    <Card className="w-100 h-100">
      <CardHeader>
        <CardTitle>Most Visited Page</CardTitle>
      </CardHeader>
      <CardContent>
        <TablePage />
      </CardContent>
    </Card>
  )
}

export default VisitedPages
