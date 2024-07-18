import React from "react"

import SectionTitle from "../generic/SectionTitle"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import TableSocialMediaPage from "./table-social"

function SocialMedia() {
  return (
    <Card className="w-100 h-100">
      <CardHeader>
        <CardTitle>Social Media Traffic </CardTitle>
      </CardHeader>
      <CardContent>
        <TableSocialMediaPage />
      </CardContent>
    </Card>
  )
}

export default SocialMedia
