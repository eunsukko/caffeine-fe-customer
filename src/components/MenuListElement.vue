<template>
  <div class="menu-list-element">
    <v-list-item>
      <v-list-item-avatar size="62" tile="isListItemAvatarTile">
        <v-img :src="menuItem.img"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title><strong>{{menuItem.name}}</strong></v-list-item-title>
        <v-list-item-subtitle v-text="menuItem.nameInEnglish"></v-list-item-subtitle>
        <v-spacer></v-spacer>
        <v-list-item-title><strong>{{menuItem.price}} 원</strong></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import MenuItem from '@/models/MenuItem'

let b = true

// Component 가 없으면 menuItem 을 템플릿에서 사용하지 못하는 것 같음
@Component
export default class MenuListElement extends Vue {
  @Prop() private menuItem!: MenuItem;

  // 크롬에서 경고가 뜨는데 파악이 필요
  // [Vue warn]: Invalid prop: type check failed for prop "tile". Expected Boolean, got String with value "isListItemAvatarTile".
  get isListItemAvatarTile (): boolean {
    return true
  }
}
</script>

<style lang="scss" scoped>
strong {
  font-weight: 800;
}
</style>
