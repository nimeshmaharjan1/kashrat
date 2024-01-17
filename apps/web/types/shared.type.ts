import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";

export type ResponseExceptionType = AxiosError<{
  entites: Array<any>;
  message: string;
  statusCode: HttpStatusCode;
}>;

export type ResponseSuccessType<T> = AxiosResponse<{
  data: T;
  message: string;
  statusCode: HttpStatusCode;
}>;

export type UserType = {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  updatedAt: string;
};
