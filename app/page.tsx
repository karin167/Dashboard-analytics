import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import DailyVisitors from "@/components/daily-visitors/DailyVisitors"
import { ExampleChart } from "@/components/daily-visitors/sample-chart"
import MetricSummary from "@/components/metric-summary/MetricSummary"
import Sidebar from "@/components/sidebar/Sidebar"
import SocialMedia from "@/components/social-media/SocialMedia"
import VisitedPages from "@/components/visited-pages/VisitedPages"

export default function IndexPage() {
  return (
    <div className="d-flex justify-content-between p-6 ">
      <div className="grid grid-cols-12 gap-4">
        {/** Left Section */}
        <div className=" col-span-full lg:col-span-3">
          {" "}
          <Sidebar></Sidebar>{" "}
        </div>

        {/** Right Section */}
        <div className="space-y-4 col-span-full lg:col-span-9 ">
          <DailyVisitors />
          <MetricSummary />

          <div className="grid grid-cols-12 gap-4">
            <div className=" col-span-full lg:col-span-8">
              <VisitedPages />
            </div>
            <div className="col-span-full lg:col-span-4">
              {" "}
              <SocialMedia />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
