export class Product {
  name: string;
  price: number;
  img: string;
  trangthai: boolean;

  constructor(name: string, price: number, img: string, trangthai: boolean) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.trangthai = trangthai
  }

}
