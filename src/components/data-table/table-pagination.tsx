import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface TablePaginationProps<TData> {
  table: Table<TData>;
  pageIndex: number;
  pageSize: string;
  data: TData[];
}

export function TablePagination<TData>({ 
  table, 
  pageIndex, 
  pageSize, 
  data 
}: TablePaginationProps<TData>) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
      <div className="text-sm text-muted-foreground">
        Menampilkan {
          table.getRowModel().rows.length === 0 
            ? 0 
            : pageIndex * parseInt(pageSize) + 1
        } - {
          Math.min((pageIndex + 1) * parseInt(pageSize), data.length)
        } dari {data.length} data
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
  );
} 