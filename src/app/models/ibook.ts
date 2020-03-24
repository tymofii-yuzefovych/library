export interface IBook {
  id: number;
  createdOn?: Date;
  updatedAt?: Date;
  title: string;
  author: string;
  pagesQuantity: number;
  description: string;
}
