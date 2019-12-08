<template>
  <div id="menu-list">
    <v-list>
      <template v-for="(menuItem, index) in menuItems">
        <v-subheader v-if="index === 0" :key="'subheader' + index" >주문 가능한 메뉴</v-subheader>
        <v-divider
          :key="'divider' + index"
        ></v-divider>
        <MenuListElement :menuItem="menuItem" :key="menuItem.id" />
      </template>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import MenuListElement from '@/components/MenuListElement.vue'

import MenuItem from '@/models/MenuItem'

@Component({
  components: {
    MenuListElement
  }
})
export default class MenuList extends Vue {
  @Prop() private menuItems!: MenuItem[];
}
</script>

<style lang="scss" scoped>

</style>
