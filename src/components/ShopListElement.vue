<template>
  <div class="shop">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img :src="shop.img">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p><strong>{{shop.name}}</strong> <small>{{shop.phone}}</small></p>
            <p>{{shop.address}}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Shop from '@/models/Shop'

@Component
export default class ShopListElement extends Vue {
  @Prop() private shop!: Shop;
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:400,800');

body {
  height: 100%;
  background: #e6ecf1;
  font-family: 'Muli', sans-serif;
}

strong {
  font-weight: 800;
}
p {
  line-height: 1.2;
  + p {
    margin-top: 5px;
  }
}

.shop {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding: 30px;
  + .shop {
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
