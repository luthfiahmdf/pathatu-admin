import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface DataTableHeaderProps<TData> {
  table: Table<TData>;
}

export function DataTableHeader<TData>({ table }: DataTableHeaderProps<TData>) {
  return (
    <TableHeader className="">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                key={header.id}
                className="font-bold text-orange-950 dark:text-orange-100"
              >
                <div className="flex items-center gap-1">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </div>
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
}
