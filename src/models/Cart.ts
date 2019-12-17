import Shop from './Shop'
import MenuItem from './MenuItem'

export default class Cart {
  private _shop: Shop;
  private _menuItems: MenuItem[];

  private constructor (
    shop: Shop,
    menuItems: MenuItem[]
  ) {
    this._shop = shop
    this._menuItems = menuItems
  }

  public static emptyCart: Cart = new Cart(
    Shop.emptyShop,
    [MenuItem.emptyMenuItem]
  )

  get shop () {
    return this._shop
  }

  get menuItems () {
    console.log(typeof (this._menuItems))
    return this._menuItems
  }

  public static of (obj: any) {
    const menuItems: any[] = obj.menuItems
    const cart: Cart = new Cart(
      Shop.of(obj.shop),
      menuItems.map(function (item: any, idx: number, array: any[]) {
        return MenuItem.of(item)
      })
    )

    console.log(menuItems[0].id)

    return cart
  }

  public static ofJson (json: string) {
    let obj: string = JSON.parse(json)
    console.log(obj)
    return this.of(obj)
  }

  public toJson () {
    return JSON.stringify({
      shop: this._shop,
      menuItems: this._menuItems
    })
  }
}
