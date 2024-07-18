import React from "react"
import { Avatar } from "@radix-ui/react-avatar"
import { Settings } from "lucide-react"

const AvatarProfile = () => {
  // Add any other logic or data fetching if needed
  return (
    <div className="relative">
      <img className="h-24 w-24 rounded-full" src="/karin.jpg" alt="" />
      <span className="absolute bottom-0 left-16  flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gray-100 dark:border-gray-800">
        <Settings className="h-6 w-6 text-muted-foreground" />
      </span>
    </div>
  )
}

export default AvatarProfile
