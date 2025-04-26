// import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import {
  BellIcon,
  Calendar1Icon,
  OctagonAlertIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function NotificationPanel() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="relative inline-block ">
          <BellIcon className="w-6 h-6" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
            3
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-xl">
        <DropdownMenuLabel>Notification</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-2 items-center">
            <div className="size-10 flex justify-center items-center rounded-full bg-blue-500 opacity-80">
              <SettingsIcon className="text-white size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Setting</span>
              <span className="text-xs text-gray-500">Update Dashboard</span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center">
            <div className="size-10 flex justify-center items-center rounded-full bg-pink-500 opacity-80">
              <Calendar1Icon className="text-white size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg"> Event Update</span>
              <span className="text-xs text-gray-500">
                An event date update again.
              </span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center">
            <div className="size-10 flex justify-center items-center rounded-full bg-purple-500 opacity-80">
              <UserIcon className="text-white size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg">Profile</span>
              <span className="text-xs text-gray-500">Update your profile</span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex gap-2 items-center">
            <div className="size-10 flex justify-center items-center rounded-full bg-red-400 opacity-80">
              <OctagonAlertIcon className="text-white size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg"> Application error</span>
              <span className="text-xs text-gray-500">
                check your running application.
              </span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span className="text-xs text-center text-gray-500">
            See all notification
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// <Card>
//   <CardHeader>Notifications</CardHeader>
//   <CardContent></CardContent>
//   <CardFooter>View all</CardFooter>
// </Card>;
