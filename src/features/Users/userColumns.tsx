"use client";

import { AlertDeleteButton } from "@/components/AlertDeleteButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { getInitials } from "@/utils/getInitials";
import { ColumnDef } from "@tanstack/react-table";

// schema of article
// "_id": "67e281324b476f71f19fcdef",
// "categoryIds": [],
// "fullName": "user",
// "firstName": "",
// "lastName": "",
// "image": null,
// "phone": "9111823829",
// "email": "pali28913@gmail.com",
// "password": "$2a$08$7d1zHf83aJZh7UYxKEETO.XtN.TiAuRVRJAbVRxqLFUs8AKYvl4Cq",
// "referralCode": "8ZCOEXPER",
// "firstLineAddress": "",
// "secondLineAddress": "",
// "country": "",
// "state": "",
// "district": "",
// "otp": "",
// "accountVerification": true,
// "blockUser": [],
// "followerRequest": [],
// "followerRequestSent": [],
// "followers": [],
// "following": [],
// "wallet": 0,
// "numOfReviews": 0,
// "ratings": 0,
// "latitude": 0,
// "longitude": 0,
// "status": "Pending",
// "userType": "USER",
// "createdAt": "2025-03-25T10:10:58.332Z",
// "updatedAt": "2025-03-25T10:11:47.645Z",
// "__v": 0

export interface IUser {
  _id: string;
  categoryIds: string[];
  fullName: string;
  firstName: string;
  lastName: string;
  image: string | null;
  phone: string;
  email: string;
  password: string;
  referralCode: string;
  firstLineAddress: string;
  secondLineAddress: string;
  country: string;
  state: string;
  district: string;
  otp: string;
  accountVerification: boolean;
  blockUser: string[];
  followerRequest: string[];
  followerRequestSent: string[];
  followers: string[];
  following: string[];
  wallet: number;
  numOfReviews: number;
  ratings: number;
  latitude: number;
  longitude: number;
  status: "Pending" | "Approved" | "Rejected"; // or just `string` if dynamic
  userType: "USER" | "ADMIN"; // assuming these types; adjust if more
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export const userColumns: ColumnDef<IUser>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="h-5 w-5 rounded bg-accent data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary/80 transition-colors"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        className="h-5 w-5 rounded  bg-accent data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:border-primary/80 transition-colors"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage
          src={row.original.image ?? ""}
          alt={row.original.fullName}
        />
        <AvatarFallback>{getInitials(row.original.fullName)}</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    header: "Status",
    cell: () => <div className="whitespace-normal break-words">Online</div>,
  },
  {
    accessorKey: "updatedAt",
    header: "Login",
    // wrap long
    cell: ({ row }) => (
      <div className="whitespace-normal break-words">
        {new Date(row.original.updatedAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })}
      </div>
    ),
  },
  {
    header: "Operations",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <AlertDeleteButton
          id={row.original._id}
          title={row.original.fullName}
          description="user"
          onDelete={async () => {}}
        />
      </div>
    ),
  },
];
