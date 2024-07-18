import { ExternalLink } from "lucide-react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const visitedPages = [
  {
    pageName: "/store/",
    visitors: 4890,
    uniQuePageViews: 3985,
    bounceRate: "81.56%",
  },
  {
    pageName: "/store/symbols-styleguides",
    visitors: 3785,
    uniQuePageViews: 3182,
    bounceRate: "62.56%",
  },
  {
    pageName: "/store/dashboard-ui-kit",
    visitors: 2985,
    uniQuePageViews: 2115,
    bounceRate: "58.76%",
  },
  {
    pageName: "/store/webflow-card.html",
    visitors: 2440,
    uniQuePageViews: 1789,
    bounceRate: "39.59%",
  },
]
export default function TablePage() {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Table>
        <TableCaption>Made by Karin Ben Zaken 2024</TableCaption>
        <TableHeader>
          <TableRow className="uppercase">
            <TableHead className="w-[100px]">Page Name</TableHead>
            <TableHead>Visitors</TableHead>
            <TableHead>Unique page visits</TableHead>
            <TableHead className="text-right">Bounce rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {visitedPages.map((visitedPages) => (
            <TableRow key={visitedPages.pageName}>
              <TableCell className="font-medium flex justify-between">
                <p>{visitedPages.pageName}</p>
                {
                  <a href={visitedPages.pageName}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                }
              </TableCell>
              <TableCell>{visitedPages.visitors}</TableCell>
              <TableCell>{visitedPages.uniQuePageViews}</TableCell>
              <TableCell className="text-right">
                {visitedPages.bounceRate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
