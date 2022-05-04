export interface Video {
  _id?: string;
  title: string;
  description: string;
  url: string;
  createdAt?: string;
  updatedAt?: string;
  fn?: (id: string | undefined) => any;
}
