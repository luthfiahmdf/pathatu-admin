import { columns } from "./columns";
import { DataTable } from "./data-table";
import { MockBook } from "./store";

export const BooksPage = () => {
  return (
    <div>
      <h1>Books</h1>
      <DataTable columns={columns} data={MockBook} />
    </div>
  );
};
