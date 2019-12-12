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
                  v-text="currentMenuItem.name"
                ></v-card-title>
                <v-card-subtitle v-text="currentMenuItem.price + '원'"></v-card-subtitle>
              </div>
              <v-avatar
                class="ma-3"
                size="92"
                tile
              >
                <v-img :src="currentMenuItem.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row cols="12" justify="space-between" >
        <v-col cols="12" justify-self="stretch" class="text-center full-button">
          <v-btn class="brown darken-1" dark block >바로 주문하기</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import CartToolbars from '@/components/toolbars/CartToolbars.vue'

import Shop from '@/models/Shop'
import MenuItem from '@/models/MenuItem'

@Component({
  components: {
    CartToolbars
  }
})
export default class OrderPage extends Vue {
  private shop: Shop = Shop.emptyShop;
  private currentMenuItem: MenuItem = MenuItem.emptyMenuItem;

  private mounted () {
    // console.error('mounted called')
    if (localStorage.currentShopJson) {
      this.shop = Shop.ofJson(localStorage.currentShopJson)
    }
    if (localStorage.currentMenuItemJson) {
      this.currentMenuItem = MenuItem.ofJson(localStorage.currentMenuItemJson)
    }
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
</style>
