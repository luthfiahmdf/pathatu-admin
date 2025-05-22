import { api } from "@/lib/axios";
// import { TPagination, TParams } from "@/types/commons/type";
export type TBookSource = {
  id: string;
  name: string
}
// export type TCategoryResponse = {
//   data: TCategory[],
//   pagination: TPagination
// }
export const getBookSource = async (): Promise<TBookSource[]> => {
  const { data } = await api.get("/bookSource")
  return data
}

