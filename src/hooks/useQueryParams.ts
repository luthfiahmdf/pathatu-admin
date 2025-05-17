import { useSearchParams } from "react-router";
import { TableState } from '@tanstack/react-table';

export const useTableQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse initial state from URL
  const initialState: Partial<TableState> = {
    pagination: {
      pageIndex: parseInt(searchParams.get('pageIndex') || '0'),
      pageSize: parseInt(searchParams.get('pageSize') || '10'),
    },
    globalFilter: searchParams.get('globalFilter') || undefined,
    sorting: searchParams.get('sorting')
      ? JSON.parse(searchParams.get('sorting')!)
      : [],
  };

  // Function to sync table state to URL
  const syncStateToURL = (state: TableState) => {
    const newSearchParams = new URLSearchParams();

    if (state.pagination.pageIndex > 0) {
      newSearchParams.set('pageIndex', state.pagination.pageIndex.toString());
    }

    if (state.pagination.pageSize !== 10) {
      newSearchParams.set('pageSize', state.pagination.pageSize.toString());
    }

    if (state.globalFilter) {
      newSearchParams.set('globalFilter', state.globalFilter as string);
    }

    if (state.sorting?.length) {
      newSearchParams.set('sorting', JSON.stringify(state.sorting));
    }

    setSearchParams(newSearchParams, { replace: true });
  };

  return {
    initialState,
    syncStateToURL,
  };
};;
