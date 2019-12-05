
export default class Shop {
  // getter 를 만들어줘야 할 것 같다
  // _id 처럼 이름을 짓고서 get 을 통해 접근?
  public id: string;
  private name: string;
  private img: string;
  private address: string;
  private phone: string;

  private constructor (
    id: string,
    name: string,
    img: string,
    address: string,
    phone: string
  ) {
    this.id = id
    this.name = name
    this.img = img
    this.address = address
    this.phone = phone
  }

  public static of (json: any) {
    return new Shop(
      json.id,
      json.name,
      json.img,
      json.address,
      json.phone
    )
  }

  public toJson () {
    return {
      id: this.id,
      name: this.name,
      img: this.img,
      address: this.address,
      phone: this.phone
    }
  }
}
