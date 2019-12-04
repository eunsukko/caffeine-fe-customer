<template>
  <div id="shop-list">
    <ShopListElement v-for="shop in shops" :shop="shop" :key="shop.id" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import ShopListElement from '@/components/ShopListElement.vue'

import Shop from '@/models/Shop'

@Component({
  components: {
    ShopListElement
  }
})
export default class ShopList extends Vue {
  @Prop() private shops!: Shop[];
}
</script>

<style lang="scss" scoped>
#shop-list {
  max-width: 600px;
  margin: 30px auto;
}
</style>
