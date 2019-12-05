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
// 스타일을 어떻게 적용할 수 있을지 고민해봐야 할듯
// 전체적으로 높이 너비에 대한 이해가 필요하다
// 특히 컴포넌트의 경우 (외부 컴포넌트 속에 속한 경우)
#menu-list {
  max-width: 600px;
  margin: 30px auto;
}
</style>
