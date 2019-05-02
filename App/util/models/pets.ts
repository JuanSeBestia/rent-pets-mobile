export interface iPet {
  name: string;
  id: number;
  dimensions: {
    width: number;
    height: number;
    weight: number;
  };
  price: number;
  image: string;
  category: string;
  description: string;
  like: string;
  dontlike: string;
  accesories: any[];
}
