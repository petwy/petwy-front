export type Response<T> = {
  data: T
  status: number
}

export interface Api<T> {
  get<T>(url: string, headers: Record<string, string>, token: string): Promise<Response<T>>
  post<T>(url: string, body: T, headers: Record<string, string>, token: string): Promise<Response<T>>
  put<T>(url: string, body: T, headers: Record<string, string>, token: string): Promise<Response<T>>
  delete<T>(url: string, headers: Record<string, string>, token: string): Promise<Response<T>>
}
