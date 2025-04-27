import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { Loader2Icon, Trash2Icon, XCircleIcon } from "lucide-react";

import { useGetUsersQuery } from "@/features/Users/usersApi";
import { userColumns } from "@/features/Users/userColumns";
import { Card, CardContent } from "@/components/ui/card";

export function UsersPage() {
  const { data, error, isLoading } = useGetUsersQuery("");

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex justify-between">
        <h1 className=" text-3xl font-bold tracking-tight">Users</h1>

        <Button className="bg-red-100 text-red-500 hover:bg-red-400 hover:text-white">
          <Trash2Icon />
        </Button>
      </div>

      {isLoading && (
        <Card>
          <CardContent className="flex justify-center items-center h-32">
            <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
          </CardContent>
        </Card>
      )}

      {error && (
        <Card className="border-destructive">
          <CardContent className="flex items-center gap-2 h-32 text-destructive">
            <XCircleIcon className="h-8 w-8" />
            <div>
              <h3 className="font-semibold">Error Loading Users</h3>
              <p>
                {error instanceof Error
                  ? error.message
                  : "An error occurred while fetching articles"}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {data ? <DataTable columns={userColumns} data={data.data.docs} /> : ""}
    </div>
  );
}
