"use client"

import React, { useState } from "react"
import {
  Beaker,
  Briefcase,
  CalendarDays,
  Inbox,
  LayoutDashboard,
} from "lucide-react"

import { cn } from "@/lib/utils"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import AvatarProfile from "./AvatarProfile"

// import Avatar from "./Avatar"

const menus = [
  {
    id: "3a75f097-4bab-4ddd-901f-540e16631576",
    name: "Dashboard",
    icon: <LayoutDashboard />,
    subMenu: [
      {
        name: "Page Visitors",
        path: "/page-visitors",
        id: "1232b4a8-5152-4e61-89f5-c3e0c79a5178",
      },
      {
        name: "Post Performance",
        path: "/page-Performance",
        id: "836d7516-eaa2-4c51-9199-73d40c15d76f",
      },
      {
        name: "Team Overall",
        path: "/page-TeamOverall",
        id: "2b7a8ba4-9fe0-40ed-919d-cfdc3a9f12d5",
      },
    ],
  },
  {
    id: "e63fe7ef-36c4-498d-99e6-93e362336f57",
    name: "Inbox",
    icon: <CalendarDays />,
  },
  {
    id: "7450a120-08df-42ad-b94c-016259e39bb7",
    name: "Dashboard",
    icon: <Inbox />,
    subMenu: [
      {
        id: "88421079-2a0b-4909-90d8-ff784d7600dd",
        name: "All Inbox",
        path: "/page-AllInbox",
      },
      {
        id: "5fe67e48-fc8e-4a6d-8105-6bf87a36b8eb",
        name: "Sent",
        path: "/page-Sent",
      },
      {
        id: "bcf4e76d-bd0a-484d-b6fd-6ec13a71ea81",
        name: "Drafts",
        path: "/page-Drafts",
      },
    ],
  },
  {
    id: "b55e2f515-e91d-4421-b431-37ff180a4650",
    name: "Invoicing",
    icon: <Briefcase />,
  },
  {
    id: "348c221b-643d-406a-b96d-dba98e171560",
    name: "Lab / Experimental",
    icon: <Beaker />,
  },
]

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("")
  const [activeSubMenu, setActiveSubMenu] = useState("")
  return (
    <Card className="w-100 h-100 p-4">
      <CardContent>
        <AvatarProfile />

        <div>
          <Accordion type="single" collapsible className="w-full">
            {menus.map((menu) => {
              if (!menu.subMenu?.length) {
                return (
                  <AccordionItem className="-mx-4" value="item-1" key={menu.id}>
                    <Button
                      variant="link"
                      onClick={() => setActiveMenu(menu.id)}
                    >
                      <div className="flex flex-row space-x-2">
                        {" "}
                        <div
                          className={cn({
                            "text-blue-500": menu.id === activeMenu,
                          })}
                        >
                          {menu.icon}{" "}
                        </div>{" "}
                        <div
                          className={cn({
                            "text-blue-500": menu.id === activeMenu,
                          })}
                        >
                          {menu.name}{" "}
                        </div>
                      </div>
                    </Button>
                  </AccordionItem>
                )
              }

              return (
                <AccordionItem value="item-1" key={menu.id}>
                  <AccordionTrigger onClick={() => setActiveMenu(menu.id)}>
                    <div className="flex flex-row space-x-2">
                      {" "}
                      <div
                        className={cn({
                          "text-blue-500": menu.id === activeMenu,
                        })}
                      >
                        {menu.icon}{" "}
                      </div>{" "}
                      <div
                        className={cn({
                          "text-blue-500": menu.id === activeMenu,
                        })}
                      >
                        {menu.name}{" "}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col items-start justify-start space-y-2">
                    {menu.subMenu?.map((sub) => {
                      return (
                        <Button
                          className={cn({
                            "text-blue-500": sub.id === activeSubMenu,
                          })}
                          onClick={() => setActiveSubMenu(sub.id)}
                          key={sub.id}
                          variant="link"
                        >
                          {sub.name}
                        </Button>
                      )
                    })}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}

export default Sidebar
