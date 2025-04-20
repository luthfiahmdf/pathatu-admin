import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { flexRender, Table, ColumnDef } from "@tanstack/react-table";

interface DataTableBodyProps<TData, TValue> {
  table: Table<TData>;
  columns: ColumnDef<TData, TValue>[];
}

export function DataTableBody<TData, TValue>({
  table,
  columns,
}: DataTableBodyProps<TData, TValue>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row, index) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
            className={`
              hover:bg-orange-50 dark:hover:bg-orange-950/20
              ${index % 2 === 0 ? "bg-gray-50/50 dark:bg-gray-900/20" : ""}
            `}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-lg font-semibold text-gray-500">
                Tidak ada data
              </p>
              <p className="text-sm text-gray-400">
                Tidak ada data yang dapat ditampilkan saat ini
              </p>
            </div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
