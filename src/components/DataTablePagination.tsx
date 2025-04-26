import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      )}

      {table.getFilteredSelectedRowModel().rows.length === 0 && (
        <div className="flex-1 text-sm text-muted-foreground">
          Showing{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          -{" "}
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            table.getFilteredRowModel().rows.length}{" "}
          of {table.getFilteredRowModel().rows.length}
        </div>
      )}

      <div className="flex items-center">
        <Button
          className="size-8 rounded-l-md rounded-r-none bg-card border p-0 hover:bg-primary disabled:cursor-not-allowed"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="h-4 w-4 text-secondary-foreground" />
        </Button>
        <Button
          className="size-8 rounded-r-md rounded-l-none bg-card border p-0 hover:bg-secondary disabled:cursor-not-allowed"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="h-4 w-4 text-secondary-foreground" />
        </Button>
      </div>
    </div>
  );
}
