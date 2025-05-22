import { keepPreviousData, useQuery, UseQueryResult } from "@tanstack/react-query";
import { TParams } from "@/types/commons/type";
import { getCategory, TCategoryResponse } from "./api";

export const useGetCategory = (
  params: TParams = {},
): UseQueryResult<TCategoryResponse, Error> => {
  return useQuery<TCategoryResponse, Error>({
    queryKey: ['category', params],
    queryFn: () => getCategory(params),
    placeholderData: keepPreviousData
  });
};
