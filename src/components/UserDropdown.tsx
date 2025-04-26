import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDownCircleIcon,
  KeyRoundIcon,
  LogOutIcon,
  UserRoundCogIcon,
} from "lucide-react";

export function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-12">
          <Avatar className="size-10">
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span>Kalyani Kumari</span>
            <div className="flex justify-between">
              <span className="text-xs  text-gray-500">Admin</span>
              <ChevronDownCircleIcon />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-xl" align="end" forceMount>
        <DropdownMenuItem>
          <div className="flex gap-2">
            <UserRoundCogIcon className="size-5 text-blue-500 fill-blue-500" />
            <span>Manage Account</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-2">
            <KeyRoundIcon className="size-5 text-pink-500 fill-pink-500" />
            <span> Change Password</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-2">
            <KeyRoundIcon className="size-5 text-purple-500 fill-purple-500" />
            <span>Activity Log</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex gap-2">
            <LogOutIcon className="size-5 text-pink-500 fill-pink-500" />
            <span> Log out</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
