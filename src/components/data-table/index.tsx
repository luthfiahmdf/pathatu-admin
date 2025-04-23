import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import { useEffect } from "react";

import { Table } from "@/components/ui/table";
import { TableToolbar } from "@/components/data-table/table-toolbar";
import { DataTableHeader } from "@/components/data-table/table-header";
import { DataTableBody } from "@/components/data-table/table-body";
import { TablePagination } from "@/components/data-table/table-pagination";
import { useTableParams } from "@/hooks/useTableParams";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const {
    globalFilter,
    setGlobalFilter,
    sorting,
    setSorting,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    updateUrlParams,
  } = useTableParams();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter,
      sorting,
      pagination: {
        pageSize: parseInt(pageSize),
        pageIndex,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: (updater) => {
      if (typeof updater === "function") {
        const newState = updater({
          pageIndex,
          pageSize: parseInt(pageSize),
        });
        setPageIndex(newState.pageIndex);
        setPageSize(newState.pageSize.toString());
        updateUrlParams({
          page: newState.pageIndex + 1,
          size: newState.pageSize.toString(),
        });
      }
    },
    pageCount: Math.ceil(data.length / parseInt(pageSize)),
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateUrlParams({ search: globalFilter, page: 1 });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [globalFilter]);

  return (
    <div className="space-y-4">
      <TableToolbar
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        pageSize={pageSize}
        setPageSize={setPageSize}
        setPageIndex={setPageIndex}
        updateUrlParams={updateUrlParams}
      />

      <div className="rounded-md border">
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} />
        </Table>
      </div>

      <TablePagination
        table={table}
        pageIndex={pageIndex}
        pageSize={pageSize}
        data={data}
      />
    </div>
  );
}
