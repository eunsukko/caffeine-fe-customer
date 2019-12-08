<template>
  <v-app light>
    <v-content>
      <div id="app">
         <!-- 일단은 단일 페이지로 만들어보자
        만들고 nav 를 지우면 일단은 한 페이지처럼 보임 -->
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/shops">Shops</router-link> |
          <router-link to="/shops/1/menu">Menu</router-link> |
          <router-link to="/order">Order</router-link>
        </div>
      </div>
    </v-content>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})
</script>
