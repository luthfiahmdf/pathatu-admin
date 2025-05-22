export type TParams = {
  page?: number;
  size?: number;
  search?: string;
}

export type TPagination = TParams & {
  total: number;
  totalPage: number;
}
