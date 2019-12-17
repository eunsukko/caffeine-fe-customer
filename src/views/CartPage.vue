<template>
  <div>
    <DeleteToolbars :title="'장바구니'" />
    <p>{{cart.shop.name}}</p>
    <DeletableMenuList :menuItems="cart.menuItems" />
    <BlockButton :message="'주문하기'" :clickHandler="orderCurrentCart" />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'

import Cart from '@/models/Cart'
import MenuItem from '@/models/MenuItem'
import Order from '@/models/Order'

import DeleteToolbars from '@/components/toolbars/DeleteToolbars.vue'
import DeletableMenuList from '@/components/DeletableMenuList.vue'
import BlockButton from '@/components/button/BlockButton.vue'

@Component({
  components: {
    DeleteToolbars,
    DeletableMenuList,
    BlockButton
  }
})
export default class CartPage extends Vue {
  private cart: Cart = Cart.emptyCart

  mounted () {
    localStorage.currentCartJson = `{
      "shop": {
        "id" : 110,
        "name" : "어디야 커피 잠실점..!!",
        "image" : "https://github.com/eunsukko/TIL/blob/master/201912/caffeine/pictures/starbucks_%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98.jpg?raw=true",
        "address" : "서울특별시 송파구 석촌호수로 262 (송파동)",
        "phoneNumber" : "02-758-8693"
      }, 
      "menuItems": [
        {
          "id": "1",
          "name": "프리미엄 바나나",
          "nameInEnglish": "Preminum Banana",
          "price": "1500",
          "image": "https://github.com/eunsukko/TIL/blob/master/201912/caffeine/pictures/starbucks_banana.jpeg?raw=true",
          "category": "food"
        },
        {
          "id": "2",
          "name": "아메리카노",
          "nameInEnglish": "Americano",
          "price": "4100",
          "image": "https://github.com/eunsukko/TIL/blob/master/201912/caffeine/pictures/starbucks_hot_americano.jpg?raw=true",
          "category": "beverage"
        }
      ]
    }`

    console.log(localStorage.currentCartJson)

    if (localStorage.currentCartJson) {
      this.cart = Cart.ofJson(localStorage.currentCartJson)
    }
  }

  private orderCurrentCart () {
    const order: Order = Order.from(this.cart.shop, this.cart.menuItems)
    localStorage.currentOrderJson = order.toJson()
    this.$router.push({ path: `/order` })
  }
}
</script>
