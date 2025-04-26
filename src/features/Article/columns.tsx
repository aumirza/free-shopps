"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArticleActionButton } from "./ArticleActionButton";

// schema of article
// "_id": "6805f60966970c4d387cec1f",
// "title": "Ajay",
// "description": "hi this shail",
// "image": "https://alamupload.s3.eu-north-1.amazonaws.com/completedprojects.svg",
// "popular": 0,
// "createdAt": "2025-04-21T07:38:49.479Z",
// "updatedAt": "2025-04-26T04:55:03.966Z",
// "__v": 0

export type IArticle = {
  _id: string;
  title: string;
  description: string;
  image: string;
  popular: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const articleColumns: ColumnDef<IArticle>[] = [
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
      <img
        src={row.original.image}
        alt={row.original.title}
        className="size-20 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
    // wrap long
    cell: ({ row }) => (
      <div className="whitespace-normal break-words">
        {row.original.description}
      </div>
    ),
  },
  {
    header: "Operations",
    cell: ({ row }) => <ArticleActionButton data={row.original} />,
  },
];
