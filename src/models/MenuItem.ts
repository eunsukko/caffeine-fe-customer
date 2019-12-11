export default class MenuItem {
  private id: string;
  private name: string;
  private nameInEnglish: string;
  private image: string;
  private price: string;
  private category: string;

  private constructor (
    id: string,
    name: string,
    nameInEnglish: string,
    image: string,
    price: string,
    category: string
  ) {
    this.id = id
    this.name = name
    this.nameInEnglish = nameInEnglish
    this.image = image
    this.price = price
    this.category = category
  }

  public static emptyMenuItem: MenuItem = new MenuItem(
    'empty_id',
    'empty_name',
    'empty_nameInEnglish',
    'empty_image',
    'empty_price',
    'empty_category'
  )

  public static ofJson (json: string) {
    return this.of(JSON.parse(json))
  }

  public static of (obj: any) {
    return new MenuItem(
      obj.id,
      obj.name,
      obj.nameInEnglish,
      obj.image,
      obj.price,
      obj.category
    )
  }

  public toJson () {
    return JSON.stringify({
      id: this.id,
      name: this.name,
      nameInEnglish: this.nameInEnglish,
      image: this.image,
      price: this.price,
      category: this.category
    })
  }
}
