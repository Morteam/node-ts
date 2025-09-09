export class CreateProductDTO {
  private constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: number,
    public readonly description: string,
    public readonly user: string, // User ID
    public readonly category: string // Category ID
  ){}

  static create( props: { [key: string]: any } ): [string?, CreateProductDTO?] {
    const { name, available, price, description, user, category } = props;

    if( !name ) return ['Name is required'];
    if( !user ) return ['User is required'];
    if( !category ) return ['Category is required'];

    return [undefined, new CreateProductDTO(name, !!available, price, description, user, category)];
  }
}
