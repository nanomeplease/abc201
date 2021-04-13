export interface ViewDetails {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetails[];
}
