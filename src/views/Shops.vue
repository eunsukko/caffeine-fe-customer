<template>
  <!-- <div class="shops">
  </div> -->
  <div id="shops">
    <div class="view">
      <button :class="[ shop_type === 'all' ? 'selected' : '']" @click="update_listing_shop_type('all')">
        All Shops
      </button>
      <button :class="[ shop_type === 'favorite' ? 'selected' : '']" @click="update_listing_shop_type('favorite')">
        Favorite Shops
      </button>
    </div>
    <!-- <ShopElement v-for="shop in shops" :shop="shop" v-if="(shop.shop_type === shop_type) || (shop_type === 'all')"/> -->
  </div>
</template>

<script>
export default {
  name: 'shops',
  components: {}
}
</script>
