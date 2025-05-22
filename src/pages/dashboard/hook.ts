import { keepPreviousData, useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import { createBook, getBooks, TBookResponse, TCreateBook } from "./api";
import { TParams } from "@/types/commons/type";

export const useGetBooks = (
  params: TParams = {},
): UseQueryResult<TBookResponse, Error> => {
  return useQuery<TBookResponse, Error>({
    queryKey: ['books', params],
    queryFn: () => getBooks(params),
    placeholderData: keepPreviousData
  });
};
export const useCreateBook = () => {
  return useMutation({
    mutationKey: ['createBook'],
    mutationFn: async (payload: TCreateBook) => createBook(payload)
  })
}
