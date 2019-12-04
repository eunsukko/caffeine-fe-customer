<template>
  <div class="menu-list-element">
    <article class="media">
      <div class="media-left">
        <figure class="image">
          <img :src="menuItem.img">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p><strong>{{menuItem.name}}</strong></p>
          <p><small>{{menuItem.nameInEnglish}}</small></p>
          <p><strong>{{menuItem.price}} 원</strong></p>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import MenuItem from '@/models/MenuItem'

// Component 가 없으면 menuItem 을 템플릿에서 사용하지 못하는 것 같음
@Component
export default class MenuListElement extends Vue {
  @Prop() private menuItem!: MenuItem;
}
</script>

<style lang="scss" scoped>
strong {
  font-weight: 800;
}
p {
  line-height: 1.2;
  + p {
    margin-top: 5px;
  }
}

.menu-list-element {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding: 30px;
  + .menu-list-element{
    margin-top: 20px;
  }
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}
</style>
