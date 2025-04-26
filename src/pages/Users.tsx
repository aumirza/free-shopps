import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { Trash2Icon } from "lucide-react";

import { useGetUsersQuery } from "@/features/Users/usersApi";
import { userColumns } from "@/features/Users/userColumns";

export function UsersPage() {
  const { data, error } = useGetUsersQuery("");
  console.log({ data, error });
  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between">
        <h1 className=" text-3xl font-bold tracking-tight">Users</h1>

        <Button className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white">
          <Trash2Icon />
        </Button>
      </div>
      {data ? <DataTable columns={userColumns} data={data.data.docs} /> : ""}
    </div>
  );
}
