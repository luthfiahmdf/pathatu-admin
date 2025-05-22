import { api } from "@/lib/axios"
import { TPagination, TParams } from "@/types/commons/type"


export type TBook = {
  title: string,
  categoryName: string,
  bookSourceName: string
}
export type TBookResponse = {
  data: TBook[],
  totalBooks: number
  pagination?: TPagination
}
export type TCreateBook = {
  title: string,
  categoryId: string,
  bookSourceId: string
}
export const getBooks = async (params?: TParams): Promise<TBookResponse> => {
  const { data } = await api.get("/books", {
    params: {
      page: params?.page,
      size: params?.size,
      search: params?.search
    }
  })
  return data
}
export const createBook = async (payload: TCreateBook): Promise<TCreateBook> => {
  const { data } = await api.post("/books", payload)
  return data
}
