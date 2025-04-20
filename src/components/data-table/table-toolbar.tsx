import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

interface UpdateUrlParamsType {
  page?: number;
  size?: string;
  search?: string;
}

interface TableToolbarProps {
  globalFilter: string;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  pageSize: string;
  setPageSize: Dispatch<SetStateAction<string>>;
  setPageIndex: Dispatch<SetStateAction<number>>;
  updateUrlParams: (params: UpdateUrlParamsType) => void;
}

export function TableToolbar({ 
  globalFilter, 
  setGlobalFilter, 
  pageSize, 
  setPageSize, 
  setPageIndex, 
  updateUrlParams 
}: TableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div className="relative w-full sm:w-72">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari semua..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-muted-foreground">Tampilkan</p>
        <Select 
          value={pageSize} 
          onValueChange={(value) => {
            setPageSize(value);
            setPageIndex(0);
            updateUrlParams({ size: value, page: 1 });
          }}
        >
          <SelectTrigger className="w-[70px]">
            <SelectValue placeholder={pageSize} />
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
  );
} 