import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const socialNetworks = [
  {
    platform: "Instagram",
    count: 368688,
  },
  {
    platform: "Facebook",
    count: 234567,
  },

  {
    platform: "Twitter",
    count: 120677,
  },
  {
    platform: "Linkedin",
    count: 345789,
  },
]

export default function TableSocialMediaPage() {
  const totalVisitors = socialNetworks.reduce(
    (acc, curr) => acc + curr.count,
    0
  )

  const computePercentageRatio = (visitors: number = 0) => {
    if (!totalVisitors || !visitors) return "0%"

    return (visitors * 100) / totalVisitors + "%"
  }
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Table>
        <TableHeader>
          <TableRow className="text-xs uppercase">
            <TableHead>Networks</TableHead>
            <TableHead>Visitors</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {socialNetworks.map((platform) => {
            const percentageRatio = computePercentageRatio(platform.count)

            return (
              <TableRow key={platform.platform}>
                <TableCell className="font-medium">
                  {platform.platform}
                </TableCell>
                <TableCell>
                  {new Intl.NumberFormat().format(platform.count)}
                </TableCell>

                <TableCell className="w-full ">
                  {/** Track - Gray Bar*/}
                  <div style={{ width: "100%" }} className=" h-2 bg-slate-200">
                    {/** Fill  - Blue Bar*/}
                    <div
                      style={{ width: percentageRatio }}
                      className="h-2  bg-blue-400"
                    ></div>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
