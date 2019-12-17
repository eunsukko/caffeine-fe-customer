<template>
  <div id="order-page">
    <CartToolbars title="주문"/>
    <v-container>
      <v-spacer></v-spacer>
      <v-row dense>
        <v-col cols="12">
          <v-card dark class="pa-3 brown darken-4">
            <span> 주문 매장 </span>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="shop.name"
                ></v-card-title>
                <v-card-subtitle v-text="shop.address"></v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="96"
                tile
              >
                <v-img :src="shop.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card dark class="pa-3 brown darken-4">
            <span> 최종 결제할 메뉴 </span>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="menuItems[0].name"
                ></v-card-title>
                <v-card-subtitle v-text="menuItems[0].price + '원'"></v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="92"
                tile
              >
                <v-img :src="menuItems[0].image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row cols="12" justify="space-between" >
        <v-col cols="12" justify-self="stretch" class="text-center full-button">
          <!-- 일단 보내는 로직 구현하고 프로그레스 적용  -->
          <v-btn class="brown darken-1" dark block @click="sendOrder">바로 주문하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ProgressCircular v-if="loading" class="middle-absolute-layout"/>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

import { Component, Prop, Vue } from 'vue-property-decorator'
import { String, StringBuilder } from 'typescript-string-operations'

import CartToolbars from '@/components/toolbars/CartToolbars.vue'
import ProgressCircular from '@/components/progress/ProgressCircular.vue'

import Shop from '@/models/Shop'
import MenuItem from '@/models/MenuItem'
import Order from '@/models/Order'

import WebConfig from '../WebConfig'

@Component({
  components: {
    CartToolbars,
    ProgressCircular
  }
})
export default class OrderPage extends Vue {
  private static readonly DUMMY_CUSTOMER_ID: string = '100'

  private shop: Shop = Shop.emptyShop;
  private menuItems: MenuItem[] = [MenuItem.emptyMenuItem];
  private loading: boolean = false;

  // 매번 화면이 띄워질 때 호출되는 건지 파악 필요
  private mounted () {
    // console.error('mounted called')
    if (localStorage.currentOrderJson) {
      const currentOrder: Order = Order.ofJson(localStorage.currentOrderJson)
      this.shop = currentOrder.shop
      this.menuItems = currentOrder.menuItems
    }
  }

  private async sendOrder () {
    this.beginLoading()
    try {
      const orderCreationRequestBody: any = {
        menuItemIds: this.menuItems.map(function (menuItem: MenuItem, index: number, array: any[]) {
          return menuItem.id
        }),
        customerId: OrderPage.DUMMY_CUSTOMER_ID
      }

      const response = await axios.post(this.orderPageUrl, orderCreationRequestBody)

      alert(response)
    } catch (error) {
      console.log(error)
    } finally {
      this.finishLoading()
    }
  }

  get orderPageUrl () {
    return WebConfig.API_SERVER_RUL + String.Format('/shops/{0}/orders', this.shop.id)
  }

  private beginLoading () {
    this.loading = true
  }

  private finishLoading () {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
#order-page {
  width: 100%;
  height: 100%;
}

.full-button {
  width: 100%;
}

.middle-absolute-layout {
  z-index: 10;
  position: absolute;
  width: 50%;
  height: 50%;
}
</style>
