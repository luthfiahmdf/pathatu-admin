import { api } from "@/lib/axios";
import { TPagination, TParams } from "@/types/commons/type";
export type TCategory = {
  id: string;
  name: string
}
export type TCategoryResponse = {
  data: TCategory[],
  pagination: TPagination
}
export const getCategory = async (params?: TParams): Promise<TCategoryResponse> => {
  const { data } = await api.get("/category", {
    params: {
      size: params?.size,
      page: params?.page,
      search: params?.search
    }
  })
  return data
}

