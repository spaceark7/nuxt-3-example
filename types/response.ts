export interface ResponseType<T> {
  status: number
  data: T | T[]
  error?: string
}
