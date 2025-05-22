import { useQuery } from "@tanstack/react-query";
import { getBookSource } from "./api";

export const useGetBookSource = (
) => {
  return useQuery({
    queryKey: ['bookSource'],
    queryFn: () => getBookSource(),
  });
};
