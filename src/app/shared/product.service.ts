import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品的描述', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品的描述', ['硬件设备']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品的描述', ['电子产品']),
    new Product(4, '第四个商品', 4.99, 2.5, '这是第四个商品的描述', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品的描述', ['图书产品']),
    new Product(6, '第六个商品', 6.99, 1.5, '这是第六个商品的描述', ['电子产品', '高级设备'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-03 22:22:22', '张四', 5, '东西很不错'),
    new Comment(3, 1, '2017-04-04 22:22:22', '张五', 4, '东西非常不错'),
    new Comment(4, 2, '2017-05-05 22:22:22', '张六', 2, '东西真的很不错'),
    new Comment(5, 6, '2017-05-05 22:22:23', '李四', 5, '东西给好评'),
    new Comment(6, 3, '2017-05-05 22:22:24', '张七', 2, '还不错吧，给个好评'),
    new Comment(7, 4, '2017-05-05 22:22:25', '张八', 2, '宝贝还行，一般般'),
    new Comment(8, 5, '2017-05-05 22:22:26', '张九', 2, '宝贝非常可以'),
    new Comment(9, 3, '2017-05-05 22:22:26', '张十', 2, '宝贝可以')
  ];
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {
  }
}
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}

