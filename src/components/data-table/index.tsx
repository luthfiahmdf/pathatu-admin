import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";



import { Table } from "@/components/ui/table";
import { DataTableHeader } from "@/components/data-table/table-header";
import { DataTableBody } from "@/components/data-table/table-body";

import { useTableSearchParams } from "tanstack-table-search-params";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {


  const [query] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const stateAndOnChanges = useTableSearchParams(
    { query, pathname, replace: (url) => navigate(url, { replace: true }) },
    {
      paramNames: {
        globalFilter: "search",
        pagination: {
          pageIndex: "page",
          pageSize: "size",
        },
      },
    },
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    ...stateAndOnChanges,
  });



  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari semua..."
            value={table.getState().globalFilter ?? ""}
            onChange={(value) => table.setGlobalFilter(value.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">Tampilkan</p>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize.toString()} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">per halaman</p>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div className="text-sm text-muted-foreground">
          Menmpilkan {table.getRowModel().rows.length.toLocaleString()} dari{" "}
          {table.getRowCount().toLocaleString()} Data
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="hover:bg-orange-50 hover:text-orange-600"
          >
            Sebelumnya
          </Button>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Halaman</span>
            <span className="text-sm font-medium">
              {table.getState().pagination.pageIndex + 1} dari{" "}
              {table.getPageCount()}
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="hover:bg-orange-50 hover:text-orange-600"
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
