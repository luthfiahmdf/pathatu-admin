import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { SortingState } from '@tanstack/react-table';

export const useTableParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initPageIndex = parseInt(searchParams.get("page") || "1");
  const initPageSize = searchParams.get("size") || "10";
  const initSearch = searchParams.get("search") || "";

  const [globalFilter, setGlobalFilter] = useState(initSearch);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pageSize, setPageSize] = useState(initPageSize);
  const [pageIndex, setPageIndex] = useState(initPageIndex - 1);

  const updateUrlParams = (newParams: { 
    page?: number; 
    size?: string; 
    search?: string;
  }) => {
    const current = new URLSearchParams(searchParams);
    
    if (newParams.page) current.set("page", newParams.page.toString());
    if (newParams.size) current.set("size", newParams.size);
    if (newParams.search !== undefined) {
      if (newParams.search) {
        current.set("search", newParams.search);
      } else {
        current.delete("search");
      }
    }
    
    setSearchParams(current);
  };

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || "1");
    const size = searchParams.get("size") || "10";
    const search = searchParams.get("search") || "";

    setPageIndex(page - 1);
    setPageSize(size);
    setGlobalFilter(search);
  }, [searchParams]);

  return {
    globalFilter,
    setGlobalFilter,
    sorting,
    setSorting,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    updateUrlParams
  };
}; 