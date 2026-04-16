import { Log, Authorize, Role } from './decorators';

export class ProductManagement {
  @Log
  @Authorize("admin")
  @Role("admin")
  createProduct(name: string, price: number) {
    console.log(`Product created: ${name}, Price: ${price}`);
  }

  @Log
  deleteProduct(name: string) {
    console.log(`Product deleted: ${name}`);
  }
}
