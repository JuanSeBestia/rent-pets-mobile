export interface iAction<T> {
  type: string;
  payload?: T;
}
