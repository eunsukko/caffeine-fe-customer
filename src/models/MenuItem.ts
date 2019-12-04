export default class MenuItem {
  private id: string;
  private name: string;
  private nameInEnglish: string;
  private img: string;
  private price: string;
  private category: string;

  private constructor (
    id: string,
    name: string,
    nameInEnglish: string,
    img: string,
    price: string,
    category: string
  ) {
    this.id = id
    this.name = name
    this.nameInEnglish = nameInEnglish
    this.img = img
    this.price = price
    this.category = category
  }

  public static of (json: any) {
    return new MenuItem(
      json.id,
      json.name,
      json.nameInEnglish,
      json.img,
      json.price,
      json.category
    )
  }

  public toJson () {
    return {
      id: this.id,
      name: this.name,
      nameInEnglish: this.nameInEnglish,
      img: this.img,
      price: this.price,
      category: this.category
    }
  }
}
