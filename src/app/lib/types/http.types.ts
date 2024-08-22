export type HttpResponse<T> = {
  code: number;
  data: T;
  message: string;
};
